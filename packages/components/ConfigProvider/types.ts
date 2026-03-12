import type { Language, TranslatePair } from "@er-ui-element/locale";

export interface ConfigProviderProps {
    locale?: Language,
    extendsI18Msg?: TranslatePair
}