import { createMuiTheme, Theme } from '@material-ui/core/styles';

const color = {
  green: '#6D9B12',
  grey:'#E5E5E5',
  blue:"#4285F4",
  white:'#ffffff'
};
const defaultTheme = createMuiTheme();
console.log(defaultTheme);

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
    MuiButton: {
      root: {
        paddingRight: defaultTheme.spacing(13),
        marginRight: defaultTheme.spacing(3),
        fontSize:defaultTheme.spacing(3),
      },
      text:{
        color:color.green
      },
      colorInherit: {
        color: color.blue,
      },
    },
  },
});

export default theme;
