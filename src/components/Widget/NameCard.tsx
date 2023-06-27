import { css } from "@emotion/css"
import styled from "@emotion/styled"
import Image from "next/image"

const NameCard = () => {
  return (
    <Container className="py-1 px-2 sm:px-4">
      <div>
        <Image
          src="/images/봉승우 증명사진.jpeg"
          height="84"
          width="84"
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
