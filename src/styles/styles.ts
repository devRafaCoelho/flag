import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  transition: '0.2s all ease-in-out',

  '&:hover': {
    transition: '0.4s all ease-in-out',
    color: theme.palette.primary.dark
  }
}));
