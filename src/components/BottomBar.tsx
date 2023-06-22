import { css } from "@emotion/css"
import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link"

const 연락처 = {
  깃허브: "https://github.com/itjustbong",
  링크드인:
    "https://www.linkedin.com/in/%EC%8A%B9%EC%9A%B0-%EB%B4%89-19108514a",
  인스타그램: "https://www.instagram.com/itjustbong/",
  메일: "mailto:qhdgkdbs@gmail.com",
}

const BottomBar = () => {
  return (
    <Container>
      <Link href={연락처.깃허브} target="_blank">
        <div
          className={css`
            grid-area: 1 / 1 / 2 / 3;
            background-color: black;
            border-radius: 0.5rem;
            height: 58px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          `}
        >
          <Image
            src="/images/github.svg"
            width="32px"
            height="32px"
            alt="github-itjustbong"
          />
          <div
            className={css`
              color: white;
              font-size: 1.125rem;
            `}
          >
            itjustbong
          </div>
        </div>
      </Link>

      <Link href={연락처.인스타그램} target="_blank">
        <div
          className={css`
            grid-area: 1 / 3 / 2 / 4;
          `}
        >
          <Image
            src="/images/instagram.svg"
            width="100%"
            height="64px"
            alt="github-itjustbong"
          />
        </div>
      </Link>

      <Link href={연락처.링크드인} target="_blank">
        <div
          className={css`
            grid-area: 1 / 4 / 2 / 5;
          `}
        >
          <Image
            src="/images/linkedin.svg"
            width="100%"
            height="64px"
            alt="github-itjustbong"
          />
        </div>
      </Link>

      <Link href={연락처.메일} target="_blank">
        <div
          className={css`
            grid-area: 1 / 5 / 2 / 6;
          `}
        >
          <Image
            src="/images/gmail.svg"
            width="100%"
            height="64px"
            alt="github-itjustbong"
          />
        </div>
      </Link>
    </Container>
  )
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

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  padding: 0 1rem;
`
