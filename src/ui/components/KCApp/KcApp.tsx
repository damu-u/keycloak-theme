import { memo } from "react";
import { defaultKcProps } from "keycloakify";
import Login from "../Login/Login";
import type {KcContext} from "./kcContext";


export type Props = {
    kcContext: KcContext;
};


// @ts-ignore
export const KcApp = memo((props: Props) => {
    const { kcContext } = props;
    console.log(kcContext);
    // @ts-ignore
    return <Login {...{ kcContext, ...defaultKcProps }} />;
});

export default KcApp;
