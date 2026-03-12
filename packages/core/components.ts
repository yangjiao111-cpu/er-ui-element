import { ErConfigProvider } from "@er-ui-element/components/ConfigProvider";
import {
    ErButton,
    ErIcon,
    ErButtonGroup,
    ErCollapse,
    ErCollapseItem,
    ErAlert,
    ErTooltip,
    ErPopconfirm,
    ErDropdown,
    ErDropdownItem,

} from "../components";
import type { Plugin } from 'vue';

export default [
    ErButton,
    ErIcon,
    ErButtonGroup,
    ErCollapse,
    ErCollapseItem,
    ErAlert,
    ErTooltip,
    ErPopconfirm,
    ErDropdown,
    ErDropdownItem,
    ErConfigProvider
] as Plugin[];