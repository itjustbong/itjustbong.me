import { css } from "@emotion/css"
import styled from "@emotion/styled"

const 문구 = [
  "예비창업패키지 선정 및 수료",
  "특허출원 x3",
  "개발 커뮤니티 활동",
  "도전",
  "자기주도적",
  "창업",
  "다양한 프로젝트",
]

const IntroCard = () => {
  return (
    <Container className="py-1 px-2 sm:px-4">
      <div className="font-bold text">
        도전적이며 자기주도적인 삶을 지향합니다.
      </div>
      <div className="text-gray-500">문구[]</div>
    </Container>
  )
}

export default IntroCard

const Container = styled.div`
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
