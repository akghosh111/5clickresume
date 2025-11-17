"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Logout = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    async function handleLogout() {
        setIsLoggingOut(true);
        try {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/auth/login");
                        router.refresh();
                    },
                },
            });
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setIsLoggingOut(false);
        }
    }

    function handleLogin() {
        router.push("/auth/login");
    }

    const handleAuthAction = () => {
        if (session) {
            handleLogout();
        } else {
            handleLogin();
        }
    };

    // Show loading state
    if (isPending) {
        return <button disabled></button>;
    }

    return (
        <button 
            onClick={handleAuthAction}
            disabled={isLoggingOut}
        >
            {isLoggingOut ? "Logging out..." : session ? "Logout" : "Login"}
        </button>
    );
};

export default Logout;