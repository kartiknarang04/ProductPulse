import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

// Type annotations for improved readability and type safety
export async function middleware(req: NextRequest): Promise<NextResponse> {
  const res = NextResponse.next();

  // Create a Supabase client with proper type arguments
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
