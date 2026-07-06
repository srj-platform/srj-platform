import { NextRequest, NextResponse } from "next/server";
import { getCurrentSessionUseCase } from "@/config/services";

export async function GET(request: NextRequest) {
    const sessionCookie =
        request.cookies.get("srj_session");

    if (!sessionCookie) {
        return NextResponse.json(
            {
                authenticated: false,
                message: "No active session.",
            },
            {
                status: 401,
            }
        );
    }

    const session =
        await getCurrentSessionUseCase.execute(
            sessionCookie.value
        );

    if (!session) {
        return NextResponse.json(
            {
                authenticated: false,
                message: "Session not found.",
            },
            {
                status: 401,
            }
        );
    }

    return NextResponse.json({
        authenticated: true,
        session,
    });
}