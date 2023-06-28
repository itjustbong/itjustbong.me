import styled from "@emotion/styled"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import ChatBox from "./Widget/ChatBox"
import { AiFillCloseCircle } from "react-icons/ai"

const FloatingChat = () => {
  const [chatOpen, setChatOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shrinkTimeout = setTimeout(() => {
      if (!ref.current) return
      const $ = ref.current
      $.style.width = "3.45rem"
    }, 2500)

    return () => {
      clearTimeout(shrinkTimeout)
    }
  }, [])

  const handleChatToggle = useCallback(() => {
    if (!chatOpen) setChatOpen(true)
    else setChatOpen(false)
  }, [chatOpen])

  return (
    <Container
      ref={ref}
      className="shadow-lg transition-all duration-300 overflow-hidden w-[13.5rem] hover:!w-[13.5rem]"
    >
      <FloatingElement onClick={handleChatToggle}>
        <Image
          src={"/images/chat-bubble.png"}
          width={24}
          height={24}
          alt="chat"
        />
        <div className="flex-shrink-0">Chat으로 물어보세요!</div>
      </FloatingElement>

      <ChatContainer
        className={`shadow-lg ${chatOpen ? "scale-100" : "scale-0"}`}
      >
        <ChatCloseBtn onClick={handleChatToggle}>
          <AiFillCloseCircle size={32} />
        </ChatCloseBtn>
        <ChatBox />
      </ChatContainer>
    </Container>
  )
}

export default FloatingChat

const ChatCloseBtn = styled.div`
  position: absolute;
  z-index: 12;
  color: white;
  top: 1rem;
  right: 1rem;
  size: 4rem;
`

const ChatContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  min-width: 340px;
  width: 30vw;
  max-width: 480px;
  height: 480px;
  border-radius: 1rem;
  transition: all ease 0.5s;
  transform-origin: 95% 100%;
`

const FloatingElement = styled.div`
  display: flex;
  gap: 1rem;
`

const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  height: 3.5rem;
  background: linear-gradient(122.53deg, #e0c3fc, #8ec5fc);
  border-radius: 1rem;
  color: white;
  background-size: 200% 200%;
  animation: gradient 7.5s ease infinite;
  transition: all ease 1500ms;
  cursor: pointer;
`
