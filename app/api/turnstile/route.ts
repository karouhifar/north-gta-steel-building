"use server";
import { quoteFormSchema } from "@/lib/schema";
// app/api/turnstile/route.ts
/* This is a simple API route that verifies the Turnstile token sent from the client. 
   In a real application, you would want to add additional checks, such as rate limiting,
   logging, and possibly more detailed error handling based on the "error-codes" returned by the API. */
import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = quoteFormSchema.extend({
  token: z.string().min(1),
});

async function verifyTurnstileToken(token: string, ip?: string) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    },
  );
  return (await res.json()) as { success: boolean; "error-codes": string[] };
}

export async function POST(request: Request) {
  // Validate request body against schema
  const parsed = bodySchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: "Invalid request data" },
      { status: 400 },
    );
  }
  // If valid, verify the Turnstile token with Cloudflare
  try {
    const ip =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0];
    const { token, ...data } = parsed.data;
    const res = await verifyTurnstileToken(token, ip);

    if (!res.success)
      return NextResponse.json(
        { error: "Verification failed" },
        { status: 403 },
      );

    // Forward to Bun service Email automation (or handle as needed)
    const forwardRes = await fetch(`${process.env.BUN_API_URL}/quotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-internal-secret": process.env.INTERNAL_API_SECRET!, // shared secret
      },
      body: JSON.stringify({
        ...data,
        ip,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!forwardRes.ok) {
      return NextResponse.json({ error: "Processing failed" }, { status: 502 });
    }
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
