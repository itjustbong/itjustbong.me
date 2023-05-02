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
  const [textColor, setTextColor] = useState<string>("white")
  useEffect(() => {
    ;(async () => {
      const hue = (await getHueColorOfImage(
        "/music/grio-forward.jpg",
        320,
        320
      )) as { r: number; g: number; b: number }
      setBgColor(hue)

      const brightness = Math.round(
        (hue.r * 299 + hue.g * 587 + hue.b * 114) / 1000
      )
      const textColor = brightness > 125 ? "black" : "white"
      setTextColor(textColor)
    })()
  }, [])

  return (
    <div
      className={`p-4 bg-white h-[520px] rounded-md overflow-scroll`}
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

      <div>
        <div className="overflow-hidden h-[2rem] w-[320px]">
          <div
            className={`${
              textColor === "white" ? "text-white" : "text-black"
            } font-bold text-2xl w-max`}
            style={{
              animation: "text-rotate 3s linear 1",
            }}
          >
            Forward(feat. Skinny Brown, GIST)
          </div>
        </div>
        <div
          className={`${
            textColor === "white" ? "text-gray-300" : "text-black"
          }`}
        >
          Grio
        </div>
      </div>

      {/* controller */}
      <div className="h-[5rem] flex gap-3 items-center">
        <div className="text-[2rem] bg-white rounded-full flex w-[3rem] h-[3rem] items-center justify-center">
          ▶️
        </div>
        <div className="text-[2rem] rounded-full flex w-[3rem] h-[3rem] items-center justify-center ">
          ⏸
        </div>
      </div>

      {/* progress bar */}
      <div className="bottom-0 ">
        <div className="w-full bg-white h-1 rounded-md bg-opacity-50"></div>
        <div className="w-[80%] bg-white h-1 rounded-md -translate-y-1"></div>
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
