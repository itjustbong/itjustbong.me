import styled from "@emotion/styled"
import { useChat } from "ai/react"
import axios from "axios"
import Image from "next/image"
import { FormEvent, useEffect, useRef } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { BsStopCircle } from "react-icons/bs"
import ChatBubble from "./ChatBox.Bubble"
import { ChatRequestOptions } from "ai"

const 질문들 = [
  "너는 어떤 사람이야?",
  "너가 진행한 프로젝트를 간략히 소개해줘",
  "너의 학업은 어때?",
  "가장 어려웠던 프로젝트는 뭐였어?",
  "어떤 특허를 가지고 있어?",
]

const ChatBox = () => {
  const ref = useRef<HTMLDivElement>(null)
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
    stop,
  } = useChat()

  useEffect(() => {
    if (!ref?.current) return
    const $ = ref.current
    $.scrollTop = $.scrollHeight
  }, [messages])

  useEffect(() => {
    if (isLoading) return
    if (messages.length < 2) return
    void axios.post("/api/log", {
      prompt: messages[messages.length - 2].content,
      reply: messages[messages.length - 1].content,
    })
  }, [messages, isLoading])

  const handleSendPrompt = (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => {
    handleSubmit(e)

    void axios.post("/api/log", {
      prompt: input,
      reply: `DATE: ${new Date()}`,
    })
  }

  return (
    <Container className="scrollbar-hide">
      <BubbleWrapper ref={ref} className="scrollbar-hide">
        <div className="flex items-center gap-4">
          <Image
            src="/images/chat-bubble.png"
            height="24"
            width="24"
            alt="chat-bubble"
          />
          <div className="text-white">채팅으로 물어보세요</div>
        </div>

        <div className="h-3" />

        <div className="py-2">
          <ChatBubble type="server">
            <div className="font-bold">안녕하세요!</div>
            <div className="font-bold text-gray-500">
              프론트엔드 개발자, 봉승우입니다.
            </div>
            <div className="h-5" />
            <div className="text-gray-500">저에 대해 궁금하신 것이 있나요?</div>
          </ChatBubble>

          <div>
            <div className="flex flex-row overflow-scroll scrollbar-hide cursor-pointer">
              {질문들.map((질문) => (
                <div
                  key={질문}
                  className="flex-shrink-0 px-2 text-slate-100 underline underline-offset-4 text-sm"
                  onClick={() => {
                    append({ role: "user", content: 질문 })
                  }}
                >
                  {질문}
                </div>
              ))}
            </div>
          </div>

          <div className="h-3" />

          {messages.map((hist, idx) => (
            <ChatBubble
              type={hist.role === "user" ? "client" : "server"}
              key={idx}
            >
              {hist.content}
            </ChatBubble>
          ))}
        </div>
      </BubbleWrapper>

      <form
        onSubmit={handleSendPrompt}
        className="flex gap-1 items-center absolute bottom-5 left-0 right-0 w-5/6 justify-evenly mx-auto"
      >
        <input
          className="w-5/6 rounded-md h-10 border-none outline-none bg-[rgba(255,255,255,0.5)] focus:bg-white transition-all duration-300 px-2 text-gray-600 focus:text-gray-900"
          value={isLoading ? "답변을 기다리는 중..." : input}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        {isLoading ? (
          <div className="cursor-pointer w-1/6 h-6" onClick={stop}>
            <BsStopCircle className="w-full h-full text-red-400 hover:text-red-500" />
          </div>
        ) : (
          <button type="submit" className="w-1/6 h-6 text-white">
            <AiOutlineSearch className="w-full h-full text-white" />
          </button>
        )}
      </form>
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
