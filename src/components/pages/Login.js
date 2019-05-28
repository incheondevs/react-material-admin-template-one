import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    render() {
        return (
            <div>
                <TableRow>
                    <TableCell>
                        셀셀1
                    </TableCell>
                    <TableCell>
                        셀셀2
                    </TableCell>
                    <TableCell>
                        셀셀3
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        셀셀1
                    </TableCell>
                    <TableCell>
                        셀셀2
                    </TableCell>
                    <TableCell>
                        셀셀3
                    </TableCell>
                </TableRow>
                <TableRow>
                    <Button variant="contained">LOGIN</Button>
                </TableRow>
            </div>


        )
    }

}

export default Login;