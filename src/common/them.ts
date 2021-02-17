import { createMuiTheme, Theme } from '@material-ui/core/styles';

const color = {
  blue: '#0000ff',
};
const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  overrides: {
    MuiSelect: {
      root: {
        paddingRight: defaultTheme.spacing(3),
      },
      icon: {
        color: color.blue,
      },
    },
  },
});

export default theme;
