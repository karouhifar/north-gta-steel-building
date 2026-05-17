"use server";

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
  const { token, ip } = await request.json();
  return verifyTurnstileToken(token, ip);
}
