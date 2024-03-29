"use client"

import Layout from "@components/Layout"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import {
  AiOutlineDesktop,
  AiOutlineHome,
  AiOutlineLink,
  AiOutlineMenu,
} from "react-icons/ai"
import CONFIG from "../../site.config"
import BottomBar from "../components/BottomBar"
import ChatBox from "../components/Widget/ChatBox"
import IntroCard from "../components/Widget/IntroCard"
import NameCard from "../components/Widget/NameCard"
import { NextPageWithLayout } from "./_app"

const IndexPage: NextPageWithLayout = () => {
  return (
    <Cotainer>
      <div
        // 캐로셀 Wrapper
        className={css`
          display: flex;
          min-width: 320px;
          max-width: 480px;
          margin: 0 auto;
          width: 100%;
          height: calc(100% - 98px - 1rem);
          counter-reset: item;
          overflow: scroll;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          gap: 1rem;
          -ms-overflow-style: none;
          scrollbar-width: none;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <PageWrapper>
          <div
            className={css`
              grid-area: 1 / 1 / 5 / 5;
            `}
          >
            <ChatBox />
          </div>
          <div
            className={css`
              grid-area: 5 / 1 / 7 / 3;
            `}
          >
            <NameCard />
          </div>
          <div
            className={css`
              grid-area: 5 / 3 / 7 / 5;
            `}
          >
            <IntroCard />
          </div>
        </PageWrapper>

        <PageWrapper>
          <div
            className={css`
              grid-area: 1/1/7/7;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgba(255, 255, 255, 0.25);
              border-radius: 0.5rem;
            `}
          >
            준비 중...
          </div>
        </PageWrapper>
        <PageWrapper>
          <div
            className={css`
              grid-area: 1/1/7/7;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgba(255, 255, 255, 0.25);
              border-radius: 0.5rem;
            `}
          >
            준비 중...
          </div>
        </PageWrapper>
      </div>
      <DotWrapper>
        <Dot />
        <Dot />
        <Dot />
      </DotWrapper>
      <BottomBar />
      <SideToolBar className="hidden md:flex">
        <ToolWrapper className="bg-[rgba(255,255,255,0.5)]">
          <AiOutlineHome size="1.25rem" />
        </ToolWrapper>
        <ToolWrapper>
          <AiOutlineMenu size="1.25rem" />
        </ToolWrapper>

        <ToolWrapper>
          <AiOutlineLink size="1.25rem" />
        </ToolWrapper>

        <ToolWrapper>
          <AiOutlineDesktop size="1.25rem" />
        </ToolWrapper>
      </SideToolBar>
    </Cotainer>
  )
}

IndexPage.getLayout = function getlayout(page) {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: "website",
        url: CONFIG.link,
      }}
    >
      {page}
    </Layout>
  )
}

export default IndexPage

const ToolWrapper = styled.div`
  color: white;
  margin: 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SideToolBar = styled.div`
  padding: 0.5rem 0;
  position: absolute;
  left: 2rem;
  bottom: 0;
  top: 0;
  margin: auto;
  height: fit-content;
  width: 3rem;
  border-radius: 3rem;
  background-color: rgba(255, 255, 255, 0.2);
  flex-direction: column;
  gap: 1rem;
`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 100%;
`

const DotWrapper = styled.div`
  display: flex;
  gap: 8px;
`

const PageWrapper = styled.div`
  scroll-snap-align: center;
  flex-shrink: 0;
  min-width: 320px;
  max-width: 480px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  counter-increment: item;
`

const Cotainer = styled.div`
  background: linear-gradient(
    180deg,
    #12c2e9 0%,
    #c471ed 48.96%,
    rgba(246, 79, 89, 0.65) 97.4%
  );
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  position: relative;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.375rem;
  height: 85vh;
  gap: 1rem;
  min-height: 640px;
`
