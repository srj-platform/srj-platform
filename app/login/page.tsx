"use client";

import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const result = await response.json();

        console.log(result);
    }

    return (
        <main
            style={{
                maxWidth: "400px",
                margin: "80px auto",
                padding: "24px",
                border: "1px solid #ddd",
                borderRadius: "8px",
            }}
        >
            <h1>SRJ Platform Login</h1>

            <p>Sprint 28 Login Screen</p>

            <div style={{ marginTop: "20px" }}>
                <label>Email</label>

                <input
                    type="email"
                    placeholder="admin@srj.local"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "6px",
                        marginBottom: "16px",
                    }}
                />

                <label>Password</label>

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "6px",
                    }}
                />

                <button
                    onClick={handleLogin}
                    style={{
                        width: "100%",
                        marginTop: "24px",
                        padding: "12px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </div>
        </main>
    );
}