import { Typography } from '@mui/material';
import SignupForm from '../../components/Forms/SignupForm';
import Header from '../../components/Header';
import { StyledLink } from '../../styles/styles';

export default function Signup() {
  return (
    <>
      <Header />

      <Typography variant="h4" align="center" mt={4} mb={4}>
        ADD YOUR DATA
      </Typography>

      <SignupForm />

      <Typography variant="h6" align="center" mt={4} mb={4}>
        Already have an account? <StyledLink to="/login">Do Login!</StyledLink>
      </Typography>
    </>
  );
}
