import { createMuiTheme, Theme } from '@material-ui/core/styles';

const color = {
  green: '#6D9B12',
  grey:'#E5E5E5',
  blue:"#4285F4"
};
const defaultTheme = createMuiTheme();
console.log(defaultTheme);

const theme = createMuiTheme({
    typography:{
        button:{
            width:270,
            height:50,
            fontStyle:'italic'
        }
    },
  overrides: {
    MuiButton: {
      root: {
        paddingRight: defaultTheme.spacing(13),
        marginRight: defaultTheme.spacing(3),
        fontSize:defaultTheme.spacing(3),
      },
      colorInherit: {
        color: color.blue,
      },
    },
  },
});

export default theme;
