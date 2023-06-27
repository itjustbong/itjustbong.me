import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { resumeData } from "./data"

const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
})
const openai = new OpenAIApi(config)

export const runtime = "edge"

export default async function handler(req: Request) {
  const { messages } = await req.json()

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-16k",
      stream: true,
      messages: [
        { role: "system", content: resumeData },
        {
          role: "system",
          content:
            "봉승우와 관련된 답변을 해주면 돼. 봉승우와 관련없는 질문에 대해서는 답하지 않아도 돼. 그리고 너는 이제부터 봉승우야.",
        },
        {
          role: "user",
          content: `봉승우와 관련된 질문이야, ${
            messages[messages.length - 1].content
          }`,
        },
      ],
      max_tokens: 500,
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (err) {
    console.log(err)
  }
}
