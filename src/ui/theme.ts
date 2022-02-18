import {createTheme} from '@mui/material/styles';

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
