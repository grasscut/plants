import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import lightgreen from '@material-ui/core/colors/lightGreen';

export default responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: lightgreen[800],
        },
        secondary: {
            main: amber[100],
        },
    },
}));