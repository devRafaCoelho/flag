import { Button, Container, Grid, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export default function SignupForm() {
  const genres = [
    {
      value: 'Male',
      label: 'Male'
    },
    {
      value: 'Female',
      label: 'Female'
    }
  ];

  const levels = [
    {
      value: 'Series A',
      label: 'Series A'
    },
    {
      value: 'Series B',
      label: 'Series B'
    },
    {
      value: 'Series C',
      label: 'Series C'
    }
  ];

  const countryStates = [
    {
      value: 'Acre',
      label: 'AC'
    },
    {
      value: 'Alagoas',
      label: 'AL'
    },
    {
      value: 'Amapá',
      label: 'AP'
    },
    {
      value: 'Amazonas',
      label: 'AM'
    },
    {
      value: 'Bahia',
      label: 'BA'
    },
    {
      value: 'Ceará',
      label: 'CE'
    },
    {
      value: 'Distrito Federal',
      label: 'DF'
    },
    {
      value: 'Espírito Santo',
      label: 'ES'
    },
    {
      value: 'Goiás',
      label: 'GO'
    },
    {
      value: 'Maranhão',
      label: 'MA'
    },
    {
      value: 'Mato Grosso',
      label: 'MT'
    },
    {
      value: 'Mato Grosso do Sul',
      label: 'MS'
    },
    {
      value: 'Minas Gerais',
      label: 'MG'
    },
    {
      value: 'Pará',
      label: 'PA'
    },
    {
      value: 'Paraíba',
      label: 'PB'
    },
    {
      value: 'Paraná',
      label: 'PR'
    },
    {
      value: 'Pernambuco',
      label: 'PE'
    },
    {
      value: 'Piauí',
      label: 'PI'
    },
    {
      value: 'Rio de Janeiro',
      label: 'RJ'
    },
    {
      value: 'Rio Grande do Norte',
      label: 'RN'
    },
    {
      value: 'Rio Grande do Sul',
      label: 'RS'
    },
    {
      value: 'Rondônia',
      label: 'RO'
    },
    {
      value: 'Roraima',
      label: 'RR'
    },
    {
      value: 'Santa Catarina',
      label: 'SC'
    },
    {
      value: 'São Paulo',
      label: 'SP'
    },
    {
      value: 'Sergipe',
      label: 'SE'
    },
    {
      value: 'Tocantins',
      label: 'TO'
    }
  ];

  return (
    <Container component="form" maxWidth="sm">
      <Grid container spacing={3} mb={4}>
        <Grid item sm={6} xs={12}>
          <TextField label="First Name" variant="outlined" fullWidth />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField label="Last Name" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="E-mail" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="CPF" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Phone" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Genre"
            defaultValue="Male"
            helperText="Please select your genre"
          >
            {genres.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField label="Nick Name" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Level"
            defaultValue="Series A"
            helperText="Please select your level"
          >
            {levels.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField label="Frequency Rate" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Zip Code" variant="outlined" fullWidth />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField label="Address Street" variant="outlined" fullWidth />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField label="Address Number" variant="outlined" fullWidth />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField label="Address Neighborhood" variant="outlined" fullWidth />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField label="Complement" variant="outlined" fullWidth />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField label="City" variant="outlined" fullWidth />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            select
            label="UF"
            defaultValue="Bahia"
            helperText="Please select your state"
          >
            {countryStates.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" size="large" type="submit" fullWidth>
            CONFIRM DATA
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
