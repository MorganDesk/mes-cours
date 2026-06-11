import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node) => {
    // Cache les fichiers .base de l'explorateur
    return !node.data?.slug?.startsWith("tags")
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()