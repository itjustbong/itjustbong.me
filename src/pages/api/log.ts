import { prisma } from "@/src/libs/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req

  try {
    await prisma.promptLog.create({
      data: { prompt: body?.prompt || "", reply: body?.reply || "" },
    })
  } catch (err) {
    console.log(err)
  }

  res.status(200).json({ name: "John Doe" })
}
