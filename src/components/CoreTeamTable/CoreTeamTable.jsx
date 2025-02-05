import React from 'react';
import './CoreTeamTable.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination} from '@mui/material';


const CoreTeamTable = ({columns, rows}) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className='paper'  sx={{ boxShadow: 'none', borderRadius: 0 }}>
        <TableContainer className='table-container'>
            <Table stickyHeader className='table'>
            <TableHead className='table-head'>
                <TableRow className='table-row'>
                {columns.map((column) => (
                    <TableCell key={column.id} style={{ minWidth: column.minWidth }} className='table-cell'>
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody className='table-body'>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover key={row.id} className='table-row'>
                    {columns.map((column) => (
                    <TableCell key={column.id} className='table-cell'>
                        {row[column.id]}
                    </TableCell>
                    ))}
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            className='table-pagination'
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    )
}

export default CoreTeamTable;
