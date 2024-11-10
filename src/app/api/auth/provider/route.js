import { getProviders } from "next-auth/react";

export async function GET() {
    const providers = await getProviders();
    return new Response(JSON.stringify(Object.values(providers)));
}