import { createMuiTheme, Theme } from '@material-ui/core/styles';

const color = {
  green: '#6D9B12',
  grey: '#E5E5E5',
  blue: '#4285F4',
  white: '#ffffff',
  red: '#f44336',
};
const defaultTheme = createMuiTheme();
console.log(defaultTheme);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: color.green,
    },
    secondary: {
      main: color.red,
    },
  },

  overrides: {
    MuiButton: {
      root: {
        paddingRight: defaultTheme.spacing(13),
        marginRight: defaultTheme.spacing(1),
        fontSize: defaultTheme.spacing(3),
      },
      text: {
        color: color.green,
      },
      colorInherit: {
        color: color.blue,
      },
    },
  },
});

export default theme;
