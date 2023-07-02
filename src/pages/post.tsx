import Layout from "@components/Layout"
import Feed from "@containers/Feed"
import { filterPosts, getAllTagsFromPosts, getPosts } from "@libs/notion"
import CONFIG from "../../site.config"
import FloatingChat from "../components/FloatingChat"
import { TPosts, TTags } from "../types"
import { NextPageWithLayout } from "./_app"

export async function getStaticProps() {
  try {
    const posts = await getPosts()
    const filteredPost = filterPosts(posts, {
      acceptStatus: ["Public"],
      acceptType: ["Post"],
    })
    const tags = getAllTagsFromPosts(filteredPost)
    return {
      props: {
        tags: {
          All: filteredPost.length,
          ...tags,
        },
        posts: filteredPost,
      },
      revalidate: 216000,
    }
  } catch (error) {
    return
  }
}

type Props = {
  tags: TTags
  posts: TPosts
}

const PostPage: NextPageWithLayout<Props> = ({ tags, posts }) => {
  return <Feed tags={tags} posts={posts} />
}

PostPage.getLayout = function getlayout(page) {
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
      <FloatingChat />
    </Layout>
  )
}

export default PostPage
