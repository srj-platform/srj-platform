import { NextRequest, NextResponse } from "next/server";
import type { LoginRequest } from "@/core/auth/login-request.types";
import { loginUseCase } from "@/config/services";

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as LoginRequest;

        const user = await loginUseCase.execute(
            body.email,
            body.password
        );

        return NextResponse.json({
            success: true,
            user,
        });

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error
                    ? error.message
                    : "Authentication failed.",
            },
            {
                status: 401,
            }
        );
    }
}