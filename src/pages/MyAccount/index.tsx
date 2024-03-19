import { Box, Typography } from '@mui/material';
import Header from '../../components/Header';
import MyAccountTabs from '../../components/MyAccountTabs';
import DeleteAccountModal from '../../components/Modals/DeleteAccountModal';

export default function MyAccount() {
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
        <Typography variant="h3" align="center" mb={2}>
          Manage your data
        </Typography>

        <MyAccountTabs />

        <DeleteAccountModal />
      </Box>
    </>
  );
}
