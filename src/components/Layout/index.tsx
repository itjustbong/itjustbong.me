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
          className={`m-auto flex-grow w-full transition-all max-w-6xl px-1 xl:grid grid-cols-12 gap-6 ${
            fullWidth && "px-4 xl:px-24"
          }`}
        >
          <div className="col-span-9">{children}</div>
          <div className="hidden xl:block xl:col-span-3">
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
