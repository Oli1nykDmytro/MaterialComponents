import { createMuiTheme, Theme } from '@material-ui/core/styles';
import 'fontsource-roboto';

const color = {
  green: '#6D9B12',
  blackGrey: '#636363',
  white: '#ffffff',
};

const backgroundColor = {
  blueLite: ' #4285F4',
  green: '#6D9B12',
};

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },

  overrides: {
    MuiButtonGroup: {
      root: {
        width: defaultTheme.spacing(68),
      },
    },
  },
  typography: {
    button: {
      fontSize: defaultTheme.spacing(2),
      fontWeight: defaultTheme.spacing(112.5),
      backgroundColor: backgroundColor.blueLite,
      width: defaultTheme.spacing(33),
    },
  },
});

export default theme;
