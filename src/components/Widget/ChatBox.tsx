import styled from "@emotion/styled"
import Image from "next/image"
import { useCallback, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import ChatBubble from "./ChatBox.Bubble"

const ChatBox = () => {
  const [query, setQuery] = useState<string>("")

  const submitQuery = useCallback(() => {
    console.log(query)
    setQuery("")
  }, [query])

  return (
    <Container>
      <div className="flex items-center gap-4">
        <Image
          src="/images/chat-bubble.png"
          height="48px"
          width="48px"
          alt="chat-bubble"
        />
        <div className="text-white">채팅으로 물어보세요</div>
      </div>

      <div className="flex gap-1 items-center absolute bottom-5 w-5/6 justify-evenly right-0 left-0 mx-auto">
        <input
          className="w-5/6 rounded-md h-10 border-none outline-none bg-[rgba(255,255,255,0.5)] focus:bg-white transition-all duration-300 px-2 text-gray-600 focus:text-gray-900"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <AiOutlineSearch
          className="w-1/6 h-6 text-white"
          onClick={submitQuery}
        />
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
        <ChatBubble type="client">그래 반가워</ChatBubble>
      </div>
    </Container>
  )
}

export default ChatBox

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(122.53deg, #e0c3fc 23%, #8ec5fc 36.99%);
  border-radius: 1rem;
  padding: 1rem;
`
