import Layout from "@components/Layout"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"

const PortfolioPage: NextPageWithLayout = () => {
  return (
    <div className="p-4 bg-white min-h-screen dark:text-white dark:bg-zinc-700 rounded-md">
      <div>포토폴리오 페이지</div>
      <div>준비 중...👻</div>
      <div>빨리 만들어볼께용...ㅎ</div>
    </div>
  )
}

PortfolioPage.getLayout = function getlayout(page) {
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

export default PortfolioPage
