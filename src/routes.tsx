import { ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import Events from './pages/Events';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Ranking from './pages/Ranking';
import Signup from './pages/Signup';
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
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myAccount" element={<MyAccount />} />
      </Routes>
    </ThemeProvider>
  );
}
