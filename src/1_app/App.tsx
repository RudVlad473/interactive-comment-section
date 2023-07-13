import { Home } from "../pages/Home/Home"
import "./index.scss"
import { withProviders } from "./providers"

export const App = withProviders(() => {
  return <Home />
})
