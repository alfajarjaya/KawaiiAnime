import { getProviders } from "next-auth/react";

export async function GET() {
    const providers = await getProviders();
    
    // Tambahkan pengecekan untuk memastikan providers tidak undefined atau null
    if (!providers) {
        return new Response(JSON.stringify({ error: 'Providers not found' }), { status: 500 });
    }
    console.log(providers)
    return new Response(providers);
}
