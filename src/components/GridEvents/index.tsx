import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MediaCard from '../CardEvent';

const Item = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 1" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 2" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 3" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 4" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 5" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 6" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 7" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 8" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 9" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <MediaCard eventName="Event 10" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
