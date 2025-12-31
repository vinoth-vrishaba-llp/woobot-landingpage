// src/app/api/route.ts
import { NextResponse } from "next/server";

// Add this line - CRITICAL for Cloudflare Pages
export const runtime = 'edge';

export async function GET() {
  return NextResponse.json({ 
    message: "Hello, world!",
    runtime: "edge",
    timestamp: new Date().toISOString()
  });
}

// If you have other HTTP methods
export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ 
      received: body,
      success: true
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }
}