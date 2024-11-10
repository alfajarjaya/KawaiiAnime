import prisma from "@/libs/prisma"

export async function POST(req) {
    const { anime_mal_id, anime_title, user_email, comment, username } = await req.json()
    const data = { anime_mal_id, anime_title, user_email, comment, username }
    const createComment = await prisma.comment.create({ data })

    if (!createComment) return Response.json({ status: 500, isCreate: false })
    else return Response.json({ status: 200, isCreate: true })
}