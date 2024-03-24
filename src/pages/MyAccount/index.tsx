import { Container, Typography } from '@mui/material';
import Header from '../../components/Header';
import DeleteAccountModal from '../../components/Modals/DeleteAccountModal';
import MyAccountTabs from '../../components/MyAccountTabs';

export default function MyAccount() {
  return (
    <>
      <Header />

      <Container
        maxWidth="sm"
        disableGutters={true}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography sx={{ typography: { sm: 'h3', xs: 'h4' } }} align="center" mt={4} mb={2}>
          Manage your data
        </Typography>

        <MyAccountTabs />

        <DeleteAccountModal />
      </Container>
    </>
  );
}
