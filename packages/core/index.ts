import makeInstaller from "./makeInstaller";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from "./components";
import '@er-ui-element/theme/index.css'
import printLogo from './printLogo'

printLogo()

library.add(fas)
const installer = makeInstaller(components);

export * from '@er-ui-element/components';
export * from '@er-ui-element/locale'
export default installer;