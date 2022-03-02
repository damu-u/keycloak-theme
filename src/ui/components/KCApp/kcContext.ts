import "minimal-polyfills/Object.fromEntries";
import {getKcContext} from "keycloakify";

/** It's the Keycloak context, it is undefined unless we are on Keycloak, rendering the login pages. */
export const { kcContext } = getKcContext({
});

export type KcContext = NonNullable<typeof kcContext>;
