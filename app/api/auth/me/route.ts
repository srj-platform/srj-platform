import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest) {
    const sessionCookie =
        request.cookies.get("srj_session");
    console.log("[AuthMe] Cookie:", sessionCookie);
    return NextResponse.json({
        message: "Auth Me API",
        sessionCookie,
    });
}