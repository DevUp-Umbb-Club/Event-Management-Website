import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import './MembersTable.css';

function createData(Firstname, Lastname, Email, Role) {
  return { Firstname, Lastname, Email, Role };
}

const rows = [
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),
  createData('Naceri', 'Abdeslam', 'salimghalem40@gmail.com', 'Lead'),

];

export default function MembersTable() {
  const [search, setSearch] = useState(''); 

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

 
  const filteredRows = rows.filter((row) => {
    const searchTerm = search.toLowerCase();
    return (
      row.Firstname.toLowerCase().includes(searchTerm) ||
      row.Lastname.toLowerCase().includes(searchTerm) ||
      row.Email.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      
      <Stack spacing={2} sx={{ mb: 2, width: '250px',padding: '10px' }}>
        <TextField
          label="Search"
          value={search}
          onChange={handleSearchChange}
          fullWidth
          variant="outlined"
          size="small"
          
        />
      </Stack>

      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="members table">
          <TableHead>
            <TableRow>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell>{row.Firstname}</TableCell>
                <TableCell>{row.Lastname}</TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>{row.Role}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button variant="outlined" className="tasks">
                      Tasks
                    </Button>
                    <Button variant="outlined" className="change">
                      Change Department
                    </Button>
                    <Button variant="contained" className="remove">
                      Remove
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


