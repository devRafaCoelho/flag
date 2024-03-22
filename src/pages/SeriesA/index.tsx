import { Container, Typography } from '@mui/material';
import Header from '../../components/Header';
import BasicTable from '../../components/Table/SeriesATable';

export default function SeriesA() {
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
          Athletes{' '}
          <Typography variant="h5" component="span">
            (Series A)
          </Typography>
        </Typography>
        <BasicTable />
      </Container>
    </>
  );
}
