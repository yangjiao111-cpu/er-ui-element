import { makeInstaller } from "@v-element/utils";
import components from "./components";
import '@v-element/theme/index.css'

const installer = makeInstaller(components);

export * from '@v-element/components';
export default installer;