import { Typography } from '@mui/material';
import SignupForm from '../../components/Forms/SignupForm';
import Header from '../../components/Header';

export default function Signup() {
  return (
    <>
      <Header />

      <Typography variant="h4" align="center" mt={4} mb={4}>
        ADD YOUR DATA
      </Typography>

      <SignupForm />
    </>
  );
}
