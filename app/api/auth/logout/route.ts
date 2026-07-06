import { NextRequest, NextResponse } from "next/server";
import { logoutUseCase } from "@/config/services";

export async function POST(request: NextRequest) {
    const sessionCookie =
        request.cookies.get("srj_session");

    if (!sessionCookie) {
        return NextResponse.json(
            {
                success: false,
                message: "No active session.",
            },
            {
                status: 401,
            }
        );
    }

    await logoutUseCase.execute(
        sessionCookie.value
    );

    const response = NextResponse.json({
        success: true,
        message: "Logged out successfully.",
    });

    response.cookies.set({
        name: "srj_session",
        value: "",
        expires: new Date(0),
        path: "/",
    });

    return response;
}