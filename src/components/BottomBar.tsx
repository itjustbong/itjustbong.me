import styled from "@emotion/styled"

const BottomBar = () => {
  return <Container>Enter</Container>
}

export default BottomBar

const Container = styled.div`
  background: rgba(255, 255, 255, 0.2);
  background-blend-mode: color-dodge, normal;
  backdrop-filter: blur(25px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 1rem;
  min-width: 350px;
  max-width: 540px;
  width: 100%;
  height: 98px;
`
