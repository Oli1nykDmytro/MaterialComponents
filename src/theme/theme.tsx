import { createMuiTheme, Theme } from '@material-ui/core/styles';

const color = {
  green: '#6D9B12',
  blackGrey:'#636363',
  white:'#ffffff',
};

const backgroundColor={
  blueLite:' #4285F4',
  green:'#6D9B12'
}

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides:{
    MuiButtonGroup:{
      root:{
        width:defaultTheme.spacing(68),
      }
    }
  },
  typography: {
    button: {
      fontSize:defaultTheme.spacing(2),
      fontWeight:defaultTheme.spacing(112.5),
      backgroundColor:backgroundColor.blueLite,
      width:defaultTheme.spacing(33)
    },
  }
});

export default theme;
