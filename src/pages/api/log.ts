import { prisma } from "@/src/libs/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req

  try {
    await prisma.promptLog.create({
      data: { prompt: body?.prompt || "", reply: body?.reply || "" },
    })
  } catch (err) {
    console.log(err)
  } finally {
    res.json({ success: "done" })
  }
}
