import styled from "@emotion/styled"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import ChatBubble from "./ChatBox.Bubble"
import { useChat } from "ai/react"

const ChatBox = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat()

  useEffect(() => {
    if (!ref?.current) return
    const $ = ref.current
    $.scrollTop = $.scrollHeight
  }, [messages])

  return (
    <Container>
      <BubbleWrapper ref={ref}>
        <div className="flex items-center gap-4 ">
          <Image
            src="/images/chat-bubble.png"
            height="48"
            width="48"
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
        onSubmit={handleSubmit}
        className="flex gap-1 items-center absolute bottom-5 left-0 right-0 w-5/6 justify-evenly mx-auto"
      >
        <input
          className="w-5/6 rounded-md h-10 border-none outline-none bg-[rgba(255,255,255,0.5)] focus:bg-white transition-all duration-300 px-2 text-gray-600 focus:text-gray-900"
          value={isLoading ? "답변을 기다리는 중..." : input}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        <button type="submit" className="w-1/6 h-6 text-white">
          <AiOutlineSearch className="w-1/6 h-6 text-white" />
        </button>
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
