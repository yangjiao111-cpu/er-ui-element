import { withInstall } from "@er-ui-element/utils";
import ConfigProvider from './ConfigProvider.vue'

export const ErConfigProvider = withInstall(ConfigProvider)

export * from './hooks'
export * from './types'