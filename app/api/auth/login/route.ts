import { NextRequest, NextResponse } from "next/server";
import type { LoginRequest } from "@/core/auth/login-request.types";
import { loginUseCase } from "@/config/services";

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as LoginRequest;

        const result = await loginUseCase.execute(
            body.email,
            body.password
        );

        const response = NextResponse.json({
            success: true,
            user: result.user,
        });

        response.cookies.set({
            name: "srj_session",
            value: result.session.sessionId,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            expires: result.session.expiresAt,
            path: "/",
        });

        return response;

    } catch (error) {

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Authentication failed.",
            },
            {
                status: 401,
            }
        );
    }
}