import { TableCell, TableRow } from "@mui/material";

export default function Customer(props) {
    return (
        <TableRow>
            <TableCell>{props.customer.id}</TableCell>
            <TableCell><img src={props.customer.image} alt="profile"/></TableCell>
            <TableCell>{props.customer.name}</TableCell>
            <TableCell>{props.customer.birth}</TableCell>
            <TableCell>{props.customer.gender}</TableCell>
            <TableCell>{props.customer.job}</TableCell>
        </TableRow>
    )
}

