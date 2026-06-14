import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export const CHAT_MODEL = "gemini-3.5-flash"; // or "gemini-2.5-flash"

export const EMBEDDING_MODEL = "gemini-embedding-001";

export const EMBEDDING_DIM = 768; // 768 is a good size/quality tradeoff
