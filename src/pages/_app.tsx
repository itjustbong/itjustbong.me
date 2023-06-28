import "prismjs/themes/prism.css"
import "react-notion-x/src/styles.css"
import "katex/dist/katex.min.css"
import "@styles/globals.css"
import "@styles/notion.css"
import useThemeEffect from "@hooks/useThemeEffect"
import useGtagEffect from "@hooks/useGtagEffect"
import Scripts from "@components/Scripts"
import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import FloatingChat from "../components/FloatingChat"

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  useThemeEffect()
  useGtagEffect()

  return (
    <>
      <Analytics />
      <Scripts />
      {getLayout(<Component {...pageProps} />)}
      <FloatingChat />
    </>
  )
}

export default MyApp
