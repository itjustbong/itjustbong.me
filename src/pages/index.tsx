import Layout from "@components/Layout"
import Image from "next/image"
import Link from "next/link"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"

const devStack = [
  { title: "JS", img: "", subTitle: "" },
  { title: "TS", img: "", subTitle: "" },
  { title: "React", img: "", subTitle: "" },
  { title: "Next", img: "", subTitle: "" },
  { title: "Node", img: "", subTitle: "" },
]

const favMusic = [
  {
    title: "몽유",
    img: "/intro/music/sleep walker.jpg",
    author: "빅나티",
    description: "설명",
  },
  {
    title: "Dive with you",
    img: "/intro/music/dive with you.jpg",
    author: "서리",
    description: "설명",
  },
  {
    title: "dank",
    img: "/intro/music/dank.jpg",
    author: "박재범",
    description: "설명",
  },
  {
    title: "널 만나러 가는 길이야",
    img: "/intro/music/the way to see you.jpeg",
    author: "래원",
    description: "설명",
  },
  {
    title: "drivin",
    img: "/intro/music/drivin.jpg",
    author: "김승민",
    description: "설명",
  },
]

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className="p-4 bg-white h-[85vh] dark:text-white dark:bg-zinc-700 rounded-md overflow-scroll">
      <div className="font-bold text-5xl text-gray-600 text-center">
        try, catch, learn
      </div>
      <div className="h-5"></div>
      <div className="font-medium text-gray-600 text-center">
        도전하고, 실패하고, 배우는 것을 즐기는 프론트엔드 개발자, 봉승우 입니다.
      </div>
      <div className="h-5" />

      <div className="text-center">
        <Image
          src={"/intro/construction.gif"}
          alt="공사중"
          width="240px"
          height="240px"
        />
      </div>

      <div className="font-medium text-gray-600 text-center">
        아직 메인페이지는 준비 중입니다.
      </div>

      <div className="h-10"></div>

      <div className="flex-col justify-centet mx-auto text-gray-600">
        <div className="text-center">구경하기</div>
        <div className="h-5"></div>
        <div className="flex justify-center gap-4">
          <div className="p-4 bg-green-500 inline-block rounded-md text-white">
            <Link href={"/feed"}>경험</Link>
          </div>
          <div className="p-4 bg-green-500 inline-block rounded-md text-white">
            <Link href={"/resume"}>이력서</Link>
          </div>
        </div>
      </div>

      {/* <div>Who Am I</div>
      <Image
        src="/intro/who-am-i.gif"
        alt="개발자"
        width={"240px"}
        height={"240px"}
      />
      <div>Develop</div> */}

      {/* <div className="border border-black p-5 rounded-xl">
        <div>Music</div>

        {favMusic.map((music) => (
          <div key={music.title}>
            <Image
              className="rounded-full image-20-animation"
              src={music.img}
              alt={music.title}
              width={"120px"}
              height={"120px"}
            />
            <div>{music.author}</div>
            <div>{music.description}</div>
          </div>
        ))}
      </div> */}
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
