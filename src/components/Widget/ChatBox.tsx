import styled from "@emotion/styled"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import ChatBubble from "./ChatBox.Bubble"

const ChatBox = () => {
  const [history, setHistory] = useState<
    {
      type: "server" | "client"
      message: string
    }[]
  >([])
  const [currQuery, setCurrQuery] = useState<string>("")
  const [currResponse, setCurrResponse] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currResponse === "") return
    if (loading) return
    setHistory((prev) => [...prev, { type: "server", message: currResponse }])
  }, [currResponse, loading])

  const submitQuery = useCallback(async () => {
    setHistory((prev) => [...prev, { type: "client", message: currQuery }])
    setLoading(true)

    const $ = ref.current!
    $.scrollTop = $.scrollHeight
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "text/event-stream" },
        body: JSON.stringify({ message: currQuery }),
      })
      const reader = (response.body as unknown as ReadableStream<Uint8Array>)
        .pipeThrough(new TextDecoderStream())
        .getReader()
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        const lines = value.toString().split("\n\n")
        for (const line of lines) {
          if (line.startsWith("data:")) {
            const message = line.replace("data: ", "")
            if (message === "undefined") break
            setCurrResponse((prev) => prev + message)
            const $ = ref.current!
            $.scrollTop = $.scrollHeight
          }
        }
      }
      setLoading(false)
      setCurrQuery("")
      setCurrResponse("")
    } catch (err) {}
  }, [currQuery, setHistory])

  return (
    <Container>
      <BubbleWrapper ref={ref}>
        <div className="flex items-center gap-4 ">
          <Image
            src="/images/chat-bubble.png"
            height="48px"
            width="48px"
            alt="chat-bubble"
          />
          <div className="text-white">채팅으로 물어보세요</div>
        </div>

        <div className="h-5" />

        <div className="py-2">
          <ChatBubble type="server">
            <div className="font-bold">안녕하세요!</div>
            <div className="font-bold text-gray-500">
              프론트엔드 개발자, 봉승우입니다.
            </div>
            <div className="h-5" />
            <div className="text-gray-500">저에 대해 궁금하신 것이 있나요?</div>
          </ChatBubble>
          {history.map((hist, idx) => (
            <ChatBubble type={hist.type} key={idx}>
              {hist.message}
            </ChatBubble>
          ))}
          {currResponse && (
            <ChatBubble type="server">{currResponse}</ChatBubble>
          )}
        </div>
      </BubbleWrapper>

      <div className="flex gap-1 items-center absolute bottom-5 left-0 right-0 w-5/6 justify-evenly mx-auto">
        <input
          className="w-5/6 rounded-md h-10 border-none outline-none bg-[rgba(255,255,255,0.5)] focus:bg-white transition-all duration-300 px-2 text-gray-600 focus:text-gray-900"
          value={loading ? "답변을 기다리는 중..." : currQuery}
          onChange={(e) => setCurrQuery(e.target.value)}
          disabled={loading}
        />
        <AiOutlineSearch
          className="w-1/6 h-6 text-white"
          onClick={submitQuery}
        />
      </div>
    </Container>
  )
}

export default ChatBox

const BubbleWrapper = styled.div`
  overflow: scroll;
  height: calc(100% - 4rem);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(122.53deg, #e0c3fc 23%, #8ec5fc 36.99%);
  border-radius: 1rem;
  padding: 1rem;
`
