import * as reactDom from "react-dom";
import "./index.scss";
import "./kcMessagesExtension"
import {KcApp} from "./ui/components/KCApp/KcApp";
import {kcContext} from "./ui/components/KCApp/kcContext";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {ThemeProvider} from "@mui/material/styles";
import theme from "ui/theme";

export const muiCache = createCache({
  "key": "mui",
  "prepend": true
});

// @ts-ignore
reactDom.render(
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <KcApp // @ts-ignore
            kcContext={kcContext}/>
      </ThemeProvider>
    </CacheProvider>,
    document.getElementById("root")
);
