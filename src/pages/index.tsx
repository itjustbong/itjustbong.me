import Layout from "@components/Layout"
import Image from "next/image"
import Link from "next/link"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"
import { TypeAnimation } from "react-type-animation"
import { useEffect } from "react"
import { useRouter } from "next/router"

const IndexPage: NextPageWithLayout = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/resume")
  }, [router])
  return (
    <div className="p-4 bg-white h-[85vh] dark:text-white dark:bg-zinc-700 rounded-md overflow-scroll">
      <div className="font-bold text-5xl text-gray-600 text-center">
        <TypeAnimation
          sequence={[
            "안녕하세요 👋", // Types 'One'
            1000,
            "FE DEV, 봉승우입니다🧑🏻‍💻",
            // () => {
            //   console.log("Sequence completed") // Place optional callbacks anywhere in the array
            // },
          ]}
          wrapper="span"
          cursor={true}
          repeat={1}
          style={{ fontSize: "1.8rem", display: "inline-block" }}
        />
      </div>

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
        <div className="flex justify-center gap-4">
          <div className="p-4 inline-block rounded-md text-md font-bold">
            <Link href={"/feed"}>📚 /feed</Link>
          </div>
          <div className="p-4 inline-block rounded-md text-md font-bold">
            <Link href={"/resume"}>📝 /resume</Link>
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
