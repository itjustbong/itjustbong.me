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
    <Container className="py-1 px-2 sm:px-4 overflow-hidden">
      <Title>History</Title>
      <ScorllTitle className="hover:-translate-x-16">
        도전적이며 자기주도적인 삶을 지향합니다.
      </ScorllTitle>
      <div className="text-gray-500">문구[]</div>
    </Container>
  )
}

export default IntroCard

const Title = styled.div`
  position: absolute;
  top: 1rem;
  font-weight: bold;
  background: -webkit-linear-gradient(#121fcf, #cf1512);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ScorllTitle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 3rem;
  font-weight: bold;
  width: 30rem;
  transition: all ease 0.5s;
  animation: auto-scroll-x 2.5s ease 1;
`

const Container = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
