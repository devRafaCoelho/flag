import { ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import Events from './pages/Events';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Register from './pages/Register';
import SeriesA from './pages/SeriesA';
import SeriesB from './pages/SeriesB';
import SeriesC from './pages/SeriesC';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme } from './theme/theme';

export default function MainRoutes() {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/seriesA" element={<SeriesA />} />
        <Route path="/seriesB" element={<SeriesB />} />
        <Route path="/seriesC" element={<SeriesC />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myAccount" element={<MyAccount />} />
      </Routes>
    </ThemeProvider>
  );
}