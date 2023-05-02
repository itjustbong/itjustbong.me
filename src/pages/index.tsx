import Layout from "@components/Layout"
import Image from "next/image"
import Link from "next/link"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"
import { TypeAnimation } from "react-type-animation"
import { getHueColorOfImage } from "../libs/utils/image"
import { useEffect, useState } from "react"

const IndexPage: NextPageWithLayout = () => {
  const [bgColor, setBgColor] = useState<{ r: number; g: number; b: number }>({
    r: 0,
    g: 0,
    b: 0,
  })
  useEffect(() => {
    ;(async () => {
      const hue = (await getHueColorOfImage(
        "/music/grio-forward.jpg",
        320,
        320
      )) as { r: number; g: number; b: number }

      console.log(hue)
      setBgColor(hue)
    })()
  }, [])

  return (
    <div
      className={`p-4 bg-white h-[85vh] rounded-md overflow-scroll`}
      style={{
        backgroundColor: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, 0.8)`,
      }}
    >
      <div className="text-center">
        <Image
          className="rounded-md"
          src="/music/grio-forward.jpg"
          alt="앨범 커버"
          width={"320px"}
          height={"320px"}
        />
      </div>
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
