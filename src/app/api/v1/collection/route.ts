import prisma from "@/libs/prisma"

export async function POST(req: any) {
    const { anime_mal_id, anime_title, anime_img, user_email } = await req.json()
    const data = { anime_mal_id, anime_title, anime_img, user_email }
    const createCollection = await prisma.collection.create({ data })

    if (!createCollection) return Response.json({ status: 500, isCreate: false })
    else return Response.json({ status: 200, isCreate: true })
}