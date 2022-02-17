import "minimal-polyfills/Object.fromEntries";
import {getKcContext} from "keycloakify";
import {kcMessages} from "keycloakify/lib/i18n/useKcMessage";
import type {KcLanguageTag} from "keycloakify";
import {id} from "tsafe/id";


export const {kcContext} = getKcContext({
});

export type KcContext = NonNullable<typeof kcContext>;
