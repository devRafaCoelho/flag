import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import { getTheme } from './theme/theme';

export default function MainRoutes() {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}
