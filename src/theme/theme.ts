import { createTheme } from '@mui/material';

export function getTheme() {
  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ed6c02',
        light: '#ff9800',
        dark: '#e65100'
      }
    },
    typography: {
      fontFamily: 'Nunito, sans-serif'
    }
  });
}
