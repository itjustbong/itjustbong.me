import Layout from "@components/Layout"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"

const IndexPage: NextPageWithLayout = () => {
  return (
    <div>
      <div>메인 페이지</div>
      <div>준비 중...👻</div>
      <div>빨리 만들어볼께용...ㅎ</div>
    </div>
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
