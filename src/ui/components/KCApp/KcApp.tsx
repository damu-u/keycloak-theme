import { memo } from "react";
import { defaultKcProps } from "keycloakify";
import type { KcContext } from "./kcContext";
import { KcApp as KcAppBase } from "keycloakify/lib/components/KcApp";
import {makeStyles} from "tss-react/mui";
import ci from "ui/assets/svg/ci.svg";

export type Props = {
    kcContext: KcContext;
};

export const KcApp = memo((props: Props) => {
    const { kcContext } = props;

    const { classes } = useStyles();

    const kcProps = {
        ...defaultKcProps,
        "kcHtmlClass": [...defaultKcProps.kcHtmlClass, classes.kcHtmlClass],
        "kcLoginClass": [...defaultKcProps.kcLoginClass, classes.kcLoginClass],
        "kcFormCardClass": [...defaultKcProps.kcFormCardClass, classes.kcFormCardClass],
    };

    return <KcAppBase {...{ kcContext, ...kcProps }} />;
});

const useStyles = makeStyles({ "name": { KcApp } })(theme => ({
    "kcLoginClass": {
        "& #kc-locale": {
            "zIndex": 5,
        },
    },
    "kcHtmlClass": {
        "& body": {
            "background": `url(${ci}) no-repeat left center fixed`,
            "backgroundColor": theme.palette.primary.main,
            "fontFamily": theme.typography.fontFamily,
        },
        "& #kc-header-wrapper": {
            "visibility": "hidden",
        },
    },
    "kcFormCardClass": {
        "borderRadius": 10,
        "marginLeft": "1000px",
    },
}));
