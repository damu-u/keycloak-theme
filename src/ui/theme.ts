import {createTheme} from '@mui/material/styles';
import ci from "./assets/svg/ci.svg";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#31302e',
        },
        secondary: {
            main: '#f58220',
            contrastText: '#ffffff',
        },
    },
});

export default theme;
