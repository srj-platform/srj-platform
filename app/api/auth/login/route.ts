import { NextRequest, NextResponse } from "next/server";
import type { LoginRequest } from "@/core/auth/login-request.types";

export async function POST(request: NextRequest) {
    const body = (await request.json()) as LoginRequest;

    return NextResponse.json({
        success: true,
        received: {
            email: body.email,
        },
    });
}