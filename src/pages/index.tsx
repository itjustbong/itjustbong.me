import Layout from "@components/Layout"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import ChatBox from "../components/Widget/ChatBox"
import NameCard from "../components/Widget/NameCard"
import BottomBar from "../components/BottomBar"

const IndexPage: NextPageWithLayout = () => {
  return (
    <Cotainer>
      <div
        // 캐로셀 Wrapper
        className={css`
          display: flex;
          min-width: 320px;
          max-width: 540px;
          margin: 0 auto;
          width: 100%;
          height: calc(100% - 98px - 1rem);
          counter-reset: item;
          overflow: scroll;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
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
            <NameCard />
          </div>
        </PageWrapper>

        <PageWrapper>반가워1</PageWrapper>
        <PageWrapper>반가워2</PageWrapper>
      </div>
      <DotWrapper>
        <Dot />
        <Dot />
        <Dot />
      </DotWrapper>
      <BottomBar />
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
  max-width: 540px;
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
`
