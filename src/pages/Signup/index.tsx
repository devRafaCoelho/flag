import { Avatar, Box, Typography } from '@mui/material';
import SignupForm from '../../components/Forms/SignupForm';
import Header from '../../components/Header';
import { StyledLink } from '../../styles/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Signup() {
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
          Sign up
        </Typography>
      </Box>

      <SignupForm />

      <Typography variant="h6" align="center" mb={4}>
        Already have an account? <StyledLink to="/login">Do Login!</StyledLink>
      </Typography>
    </>
  );
}
