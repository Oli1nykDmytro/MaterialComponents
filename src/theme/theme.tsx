import { createMuiTheme, Theme } from '@material-ui/core/styles';

const color = {
  green: '#6D9B12',
};

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
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
    },
  },
});

export default theme;
