import Layout from "@components/Layout"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"

const HistoryPage: NextPageWithLayout = () => {
  return (
    <div>
      <div>경험 페이지</div>
      <div>준비 중...👻</div>
      <div>빨리 만들어볼께용...ㅎ</div>
    </div>
  )
}

HistoryPage.getLayout = function getlayout(page) {
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

export default HistoryPage
