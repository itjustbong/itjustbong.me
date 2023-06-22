import { css } from "@emotion/css"
import styled from "@emotion/styled"
import Image from "next/image"

const NameCard = () => {
  return (
    <Container>
      <div>
        <Image
          src="/images/봉승우 증명사진.jpeg"
          height="84px"
          width="84px"
          alt="봉승우 증명사진"
          className={css`
            border-radius: 100%;
          `}
        />
      </div>
      <div className="font-bold text">봉승우</div>
      <div className="text-gray-500">Frontend Developer</div>
    </Container>
  )
}

export default NameCard

const Container = styled.div`
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
