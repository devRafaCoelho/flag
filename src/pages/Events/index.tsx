import { Container, Typography } from '@mui/material';
import Header from '../../components/Header';
import BasicGrid from '../../components/GridEvents';

export default function Events() {
  return (
    <>
      <Header />

      <Container
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h3" sx={{ mt: 3, mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
          EVENTS
        </Typography>
        <BasicGrid />
      </Container>
    </>
  );
}
