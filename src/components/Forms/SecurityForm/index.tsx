import { Button, Container, Grid, TextField } from '@mui/material';

export default function SecurityForm() {
  return (
    <Container component="form" maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField label="Current Password" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="New Password" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Confirm New Password" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" size="large" type="submit" fullWidth>
            UPDATE PASSWORD
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
