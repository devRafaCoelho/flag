import { Button, Container, Grid, TextField } from '@mui/material';

export default function LoginForm() {
  return (
    <Container component="form" maxWidth="sm">
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12}>
          <TextField label="E-mail" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Password" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" size="large" type="submit" fullWidth>
            SIGN IN
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
