import styled from "@emotion/styled"
import Image from "next/image"

const FloatingChat = () => {
  return (
    <Container>
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
`
