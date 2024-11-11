import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();

    if (!session?.user) {
        redirect("/api/auth/signin");
    }

    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}