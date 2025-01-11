import { getProviders } from 'next-auth/react';

export async function GET(params: any) {
    const providers = await getProviders();
    return new Response(JSON.stringify(providers));
}