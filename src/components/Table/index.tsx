import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  position: string,
  name: string,
  nickName: string,
  score: number,
  lastTitle: string
) {
  return { position, name, nickName, score, lastTitle };
}

const rows = [
  createData('1°', 'Athlete 1', 'Nick Name 1', 3500, 'Baiano (12/11/2023)'),
  createData('2°', 'Athlete 2', 'Nick Name 2', 3300, 'Rfut (18/12/2023)'),
  createData('3°', 'Athlete 3', 'Nick Name 3', 3100, 'Baiano (12/11/2023)'),
  createData('4°', 'Athlete 4', 'Nick Name 4', 3000, 'Rfut (18/12/2023)'),
  createData('5°', 'Athlete 5', 'Nick Name 5', 2900, 'Baiano (12/11/2023)'),
  createData('6°', 'Athlete 6', 'Nick Name 6', 2500, 'Rfut (18/12/2023)'),
  createData('7°', 'Athlete 7', 'Nick Name 7', 2400, 'Baiano (12/11/2023)'),
  createData('8°', 'Athlete 8', 'Nick Name 8', 2200, 'Rfut (18/12/2023)'),
  createData('9°', 'Athlete 9', 'Nick Name 9', 2000, 'Baiano (12/11/2023)'),
  createData('10°', 'Athlete 10', 'Nick Name 10', 1900, 'Baiano (12/11/2023)')
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ mb: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">POSITION</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">NICK NAME</TableCell>
            <TableCell align="center">SCORE</TableCell>
            <TableCell align="center">LAST TITLE</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{row.position}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.nickName}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">{row.lastTitle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
