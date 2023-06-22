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
            height: 48px;
            padding: 0 0.5rem;
            max-width: 180px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            gap: 0.5rem;
          `}
        >
          <Image
            src="/images/github.svg"
            width="24px"
            height="24px"
            alt="github-itjustbong"
          />
          <div
            className={css`
              color: white;
            `}
          >
            itjustbong
          </div>
        </div>
      </Link>

      <Link
        href={연락처.인스타그램}
        target="_blank"
        className={css`
          grid-area: 1 / 3 / 2 / 4;
          flex-shrink: 0;
        `}
      >
        <Image
          src="/images/instagram.svg"
          width="48px"
          height="48px"
          alt="github-itjustbong"
        />
      </Link>

      <Link
        href={연락처.링크드인}
        target="_blank"
        className={css`
          grid-area: 1 / 4 / 2 / 5;
          flex-shrink: 0;
          flex-grow: 0;
          width: 48px;
          height: 48px;
        `}
      >
        <Image
          src="/images/linkedin.png"
          width="48px"
          height="48px"
          alt="github-itjustbong"
        />
      </Link>
      <Link
        href={연락처.메일}
        target="_blank"
        className={css`
          grid-area: 1 / 5 / 2 / 6;
          flex-shrink: 0;
        `}
      >
        <Image
          src="/images/gmail.png"
          width="48px"
          height="38px"
          alt="github-itjustbong"
        />
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
  min-width: 320px;
  max-width: 540px;
  width: 100%;
  height: 98px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  flex-shrink: 0;
`
