import { NextResponse } from "next/server";
import { getAnalyticsConfig } from "@/lib/adminContent";

export async function GET() {
  const analytics = await getAnalyticsConfig();
  return NextResponse.json(analytics);
}
