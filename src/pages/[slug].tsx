import Detail from "@/src/containers/Detail"
import Layout from "@components/Layout"
import { filterPosts, getPostBlocks, getPosts } from "@libs/notion"
import CONFIG from "../../site.config"
import FloatingChat from "../components/FloatingChat"
import CustomError from "../containers/CustomError"
import { TPost } from "../types"
import { NextPageWithLayout } from "./_app"

export async function getStaticPaths() {
  const posts = await getPosts()
  const filteredPost = filterPosts(posts, {
    acceptStatus: ["Public", "PublicOnDetail"],
    acceptType: ["Paper", "Post", "Page"],
  })

  return {
    paths: filteredPost.map((row) => `/${row.slug}`),
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  try {
    //includePages: true
    const posts = await getPosts()
    const post = posts.find((t) => t.slug === slug)
    const blockMap = await getPostBlocks(post?.id!)

    return {
      props: { post, blockMap },
      revalidate: 216000 * 7,
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 216000 * 7,
    }
  }
}

type Props = {
  post: TPost
  blockMap: any
}

const DetailPage: NextPageWithLayout<Props> = ({ post, blockMap }) => {
  if (!post) return <CustomError />
  return <Detail blockMap={blockMap} data={post} />
}

DetailPage.getLayout = function getlayout(page) {
  const getImage = () => {
    if (page.props?.post.thumbnail) return page.props?.post.thumbnail
    if (CONFIG.ogImageGenerateURL)
      return `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(
        page.props?.post.title
      )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Flogo-for-dark-bg.svg`
  }

  const getMetaConfig = () => {
    if (!page.props.post) {
      return {
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: "website",
        url: CONFIG.link,
      }
    }
    return {
      title: page.props.post.title || CONFIG.blog.title,
      date: new Date(
        page.props.post.date?.start_date || page.props.post.createdTime || ""
      ).toISOString(),
      image: getImage(),
      description: page.props.post.summary,
      type: page.props.post.type[0],
      url: `${CONFIG.link}/${page.props.post.slug}`,
    }
  }
  return (
    <Layout metaConfig={getMetaConfig()} fullWidth={page.props.post?.fullWidth}>
      {page}
      <FloatingChat />
    </Layout>
  )
}

export default DetailPage
