import { TPost } from "@/src/types"
import useMermaidEffect from "./hooks/useMermaidEffect"
import PostDetail from "./components/PostDetail"
import PageDetail from "./components/PageDetail"

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  blockMap: any
  data: TPost
}

const Detail: React.FC<Props> = ({ blockMap, data }) => {
  useMermaidEffect()

  return (
    <div>
      <PostDetail data={data} blockMap={blockMap} />
    </div>
  )
}

export default Detail
