import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#052659',
      light: "#c1e8ff",
      dark:"#021024",
      contrastText:"#c1e8ff"
    },
  },
  multilineColor:{
    color:'red'
}
});
export default theme ;