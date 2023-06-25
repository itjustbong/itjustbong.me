import { IncomingMessage } from "http"
import { NextApiRequest, NextApiResponse } from "next"
import { Configuration, OpenAIApi } from "openai"
import { resumeData } from "./data"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.setHeader("Cache-Control", "no-cache")
    res.setHeader("Content-Type", "text/event-stream")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Connection", "keep-alive")
    res.setHeader("Content-Encoding", "none")
    res.flushHeaders()

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_KEY,
    })
    const openai = new OpenAIApi(configuration)

    const response = openai.createChatCompletion(
      {
        model: "gpt-3.5-turbo-16k",
        messages: [
          { role: "system", content: resumeData },
          {
            role: "system",
            content:
              "봉승우와 관련된 답변을 해주면 돼. 봉승우와 관련없는 질문에 대해서는 답하지 않아도 돼. 그리고 너는 이제부터 봉승우야.",
          },
          {
            role: "user",
            content:
              "봉승우와 관련된 질문이야, " + JSON.parse(req.body).message,
          },
        ],
        max_tokens: 500,
        stream: true,
      },
      { responseType: "stream" }
    )

    response.then((resp) => {
      ;(resp.data as unknown as IncomingMessage).on("data", (data: string) => {
        const lines = data.toString().split("\n\n")

        for (const line of lines) {
          if (line === "data: [DONE]") {
            res.end()
            return
          }
          if (line.startsWith("data:")) {
            const message = line.replace("data: ", "")
            const parsed = JSON.parse(message)
            res.write(`data: ${parsed.choices[0].delta.content}\n\n`)
          }
        }
      })
    })
  } catch (err) {
    console.log(err)
  }
}
