import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';

export default createMuiTheme({
    palette: {
        primary: pink,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});