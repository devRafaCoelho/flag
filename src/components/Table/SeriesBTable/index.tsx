import { Box, Toolbar, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FilterMenu from '../FilterMenu';
import * as React from 'react';

function createData(
  position: string,
  name: string,
  score: number,
  nickName: string,
  lastTitle: string
) {
  return { position, name, nickName, score, lastTitle };
}

const rowsMale = [
  createData('1°', 'Male 1 (B)', 3500, 'Nick Name 1', 'Baiano (12/11/2023)'),
  createData('2°', 'Male 2 (B)', 3300, 'Nick Name 2', 'Rfut (18/12/2023)'),
  createData('3°', 'Male 3 (B)', 3100, 'Nick Name 3', 'Baiano (12/11/2023)'),
  createData('4°', 'Male 4 (B)', 3000, 'Nick Name 4', 'Rfut (18/12/2023)'),
  createData('5°', 'Male 5 (B)', 2900, 'Nick Name 5', 'Baiano (12/11/2023)'),
  createData('6°', 'Male 6 (B)', 2500, 'Nick Name 6', 'Rfut (18/12/2023)'),
  createData('7°', 'Male 7 (B)', 2400, 'Nick Name 7', 'Baiano (12/11/2023)'),
  createData('8°', 'Male 8 (B)', 2200, 'Nick Name 8', 'Rfut (18/12/2023)'),
  createData('9°', 'Male 9 (B)', 2000, 'Nick Name 9', 'Baiano (12/11/2023)'),
  createData('10°', 'Male 10 (B)', 1900, 'Nick Name 10', 'Baiano (12/11/2023)')
];

const rowsFemale = [
  createData('1°', 'Female 1 (B)', 3500, 'Nick Name 1', 'Baiano (12/11/2023)'),
  createData('2°', 'Female 2 (B)', 3300, 'Nick Name 2', 'Rfut (18/12/2023)'),
  createData('3°', 'Female 3 (B)', 3100, 'Nick Name 3', 'Baiano (12/11/2023)'),
  createData('4°', 'Female 4 (B)', 3000, 'Nick Name 4', 'Rfut (18/12/2023)'),
  createData('5°', 'Female 5 (B)', 2900, 'Nick Name 5', 'Baiano (12/11/2023)'),
  createData('6°', 'Female 6 (B)', 2500, 'Nick Name 6', 'Rfut (18/12/2023)'),
  createData('7°', 'Female 7 (B)', 2400, 'Nick Name 7', 'Baiano (12/11/2023)'),
  createData('8°', 'Female 8 (B)', 2200, 'Nick Name 8', 'Rfut (18/12/2023)'),
  createData('9°', 'Female 9 (B)', 2000, 'Nick Name 9', 'Baiano (12/11/2023)'),
  createData('10°', 'Female 10 (B)', 1900, 'Nick Name 10', 'Baiano (12/11/2023)')
];

export default function SeriesBTable() {
  const [selectedOption, setSelectedOption] = React.useState('Male');

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const selectedRows = selectedOption === 'Male' ? rowsMale : rowsFemale;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            mb: 2
          }}
        >
          <Typography variant="h4" id="tableTitle" component="div">
            Athletes
          </Typography>

          <FilterMenu onSelectOption={handleSelectOption} />
        </Toolbar>

        <TableContainer component={Paper} sx={{ mb: 3 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">POSITION</TableCell>
                <TableCell align="center">NAME</TableCell>
                <TableCell align="center">SCORE</TableCell>
                <TableCell align="center">NICK NAME</TableCell>
                <TableCell align="center">LAST TITLE</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {selectedRows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">{row.position}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.score}</TableCell>
                  <TableCell align="center">{row.nickName}</TableCell>
                  <TableCell align="center">{row.lastTitle}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
