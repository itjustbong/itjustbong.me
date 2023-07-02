import { TPosts, TPostStstus, TPostType } from "@/src/types"

type Options = {
  acceptStatus?: TPostStstus[]
  acceptType?: TPostType[]
}

const initialOption: Options = {
  acceptStatus: ["Public"],
  acceptType: ["Log"],
}
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(posts: TPosts, options: Options = initialOption) {
  const { acceptStatus = ["Public"], acceptType = ["Post"] } = options
  const filteredPosts = posts
    // filter data
    .filter((post) => {
      const postDate = new Date(post?.date?.start_date || post.createdTime)
      if (!post.title || !post.slug || postDate > tomorrow) return false
      return true
    })
    // filter status
    .filter((post) => {
      const postStatus = post.status[0]
      return acceptStatus.includes(postStatus)
    })
    // filter type
    .filter((post) => {
      const postType = post.type[0]
      return acceptType.includes(postType)
    })
  return filteredPosts
}
