import Header from "./Header"
import PropTypes from "prop-types"
import MetaConfig, { MetaConfigProps } from "./MetaConfig"
import * as Cards from "./cards"
import Footer from "./Footer"
type Props = {
  children: React.ReactNode
  metaConfig: MetaConfigProps
  fullWidth?: boolean
}

const Layout: React.FC<Props> = ({
  children,
  metaConfig,
  fullWidth = false,
}) => {
  return (
    <div>
      <MetaConfig {...metaConfig} />
      <div className={`wrapper`}>
        <Header fullWidth={fullWidth} />
        <main
          className={`m-auto flex-grow w-full transition-all max-w-6xl px-4 md:grid grid-cols-12 gap-6 ${
            fullWidth && "px-4 md:px-24"
          } ${metaConfig.type === "Paper" && "py-10"} `}
        >
          {/* <div className="lg:block col-span-2"></div> */}

          <div className="col-span-12 md:col-span-9">{children}</div>
          <div className="hidden md:block md:col-span-3">
            <Cards.ProfileCard />
            <Cards.ServiceCard />
            <Cards.ContactCard />
            <Footer className="pt-4" />
          </div>
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
