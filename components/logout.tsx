"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";


const Logout = () => {

    async function handleLogout() {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    redirect("/auth/login"); // redirect to login page
                },
            },
        });

    }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout
