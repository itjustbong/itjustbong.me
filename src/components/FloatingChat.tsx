import styled from "@emotion/styled"
import Image from "next/image"
import { useEffect, useRef } from "react"

const FloatingChat = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shrinkTimeout = setTimeout(() => {
      if (!ref.current) return
      const $ = ref.current
      $.style.width = "3.5rem"
    }, 2500)

    return () => {
      clearTimeout(shrinkTimeout)
    }
  }, [])

  return (
    <Container
      ref={ref}
      className="shadow-lg transition-all duration-300 overflow-hidden w-[13.5rem] hover:!w-[13.5rem]"
    >
      <Image
        src={"/images/chat-bubble.png"}
        width={24}
        height={24}
        alt="chat"
      />
      <div className="flex-shrink-0">Chat으로 물어보세요!</div>
    </Container>
  )
}

export default FloatingChat

const Container = styled.div`
  display: flex;
  gap: 1rem;
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
