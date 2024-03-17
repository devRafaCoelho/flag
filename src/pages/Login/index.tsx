import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Typography } from '@mui/material';
import LoginForm from '../../components/Forms/LoginForm';
import Header from '../../components/Header';
import { StyledLink } from '../../styles/styles';

export default function Login() {
  return (
    <>
      <Header />

      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" mt={2} mb={4}>
          Sign in
        </Typography>
      </Box>

      <LoginForm />

      <Typography variant="h6" align="center" mb={4}>
        Don't have an account yet? <StyledLink to="/signup">Sign Up!</StyledLink>
      </Typography>
    </>
  );
}
