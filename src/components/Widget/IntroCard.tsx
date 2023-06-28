import styled from "@emotion/styled"

const 이력들 = [
  {
    title: "자기주도적",
    content: "주어진 일에 만족하지 않고,\n더 나은 방법을 탐구 및 행동",
  },
  { title: "도전적", content: "창업, 프로젝트 등\n도전하는 삶을 지향" },
  {
    title: "생각보다는 행동",
    content: "창업, 특허, 스타트업 등,\n생각보다는 행동으로",
  },
  {
    title: "창업",
    content: "예창패, 캠퍼스CEO 등,\n다양한 지원사업 선정 및 활동",
  },
  {
    title: "실패로부터의 성장",
    content: "도전 속 발생하는 실패,\n원인 분석 > 부족한 점을 보완",
  },
]

const IntroCard = () => {
  return (
    <Container className="py-1 px-2 sm:px-4 overflow-hidden">
      <Title className="sm:text-lg">Who Is</Title>
      <ScorllTitle className="hover:-translate-x-16 text-sm sm:text-base">
        도전적이며 자기주도적인 삶을 지향합니다.
      </ScorllTitle>

      <WhoCard className="scrollbar-hide">
        {이력들.map((이력) => (
          <WhoInnerCard key={이력.content} className="gap-1">
            <div className="font-semibold text-sm sm:text-base">
              {이력.title}
            </div>
            <div className="whitespace-pre-wrap text-center text-xs sm:text-sm">
              {이력.content}
            </div>
          </WhoInnerCard>
        ))}
      </WhoCard>
    </Container>
  )
}

export default IntroCard

const WhoInnerCard = styled.div`
  scroll-snap-align: center;
  background-color: aliceblue;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WhoCard = styled.div`
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  position: relative;
  overflow: scroll;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;
`

const Title = styled.div`
  font-weight: bold;
  background: -webkit-linear-gradient(#121fcf, #cf1512);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 1.5rem;
`

const ScorllTitle = styled.div`
  cursor: pointer;
  font-weight: bold;
  width: 30rem;
  transition: all ease 0.5s;
  animation: auto-scroll-x 2.5s ease 1;
  height: 2.5rem;
  display: flex;
  align-items: center;
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
