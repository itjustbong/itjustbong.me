import { useState } from "react"

import * as Cards from "@components/Layout/cards"
import * as Lists from "./components/lists"

import { TPosts, TTags } from "@custeomTypes/index"
import SearchInput from "./components/SearchInput"
import PostHeader from "./components/Header"
import Footer from "@components/Layout/Footer"

type Props = {
  tags: TTags
  posts: TPosts
}

const Feed: React.FC<Props> = ({ tags, posts }) => {
  const [q, setQ] = useState("")

  return (
    <div className="grid-cols-12 md:grid gap-6">
      <div className="hidden lg:block lg:col-span-3">
        <Lists.TagList data={tags} />
      </div>
      <div className="col-span-9">
        <Cards.MobileProfileCard />
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <Lists.TagList className="block lg:hidden" data={tags} />
        <PostHeader tags={tags} />
        <Lists.PostList q={q} posts={posts} tags={tags} />
      </div>
    </div>
  )
}

export default Feed
