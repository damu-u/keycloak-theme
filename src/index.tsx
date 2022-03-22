import * as reactDom from "react-dom";
import './locales/i18n';
import "./index.scss";
import "./kcMessagesExtension"
import {KcApp} from "./ui/components/KCApp/KcApp";
import {kcContext } from "./ui/components/KCApp/kcContext";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./ui/theme";
import React from "react";
import { CssBaseline } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import ci from "./ui/assets/svg/ci.svg";

export const muiCache = createCache({
  "key": "mui",
  "prepend": true
});

reactDom.render(
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <GlobalStyles
              styles={{
                body: {
                  background: `url(${ci}) no-repeat center center fixed`,
                  backgroundSize: 'auto',
                  backgroundColor: theme.palette.primary.main,
                },
              }}
          />
          <KcApp // @ts-ignore
              kcContext={kcContext }/>
        </ThemeProvider>
      </CacheProvider>,
    document.getElementById("root")
);
