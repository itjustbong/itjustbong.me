import Layout from "@components/Layout"
import Image from "next/image"
import Link from "next/link"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"
import { TypeAnimation } from "react-type-animation"

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className="p-4 bg-white h-[85vh] dark:text-white dark:bg-zinc-700 rounded-md overflow-scroll"></div>
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
