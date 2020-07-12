import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        maxWidth: 550,
        margin: 10
    },
});

function createData(key, value) {
    return { key, value };
}
let rows = [];

const Detail = ({ match }) => {

    const [rowss, setrowss] = useState([]);
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${match.params.id}`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    setrowss(response)
                    rows = []
                    // rows.push(createData('name', response.name),
                    //     createData('url', response.url),
                    //     createData('type', response.type),
                    //     createData('language', response.language),
                    //     createData('genre', response.genre),
                    //     createData('status', response.status),
                    //     createData('runtime', response.runtime),
                    //     createData('premiered', response.premiered),
                    //     createData('officialSite', response.officialSite),
                    //     createData('schedule', response.schedule.time + ' ' + response.schedule.days),
                    //     createData('rating', response.rating.average),
                    //     createData('weight', response.weight),
                    //     createData('network', response.network.name),
                    //     createData('webChannel', response.webChannel.name),
                    //     createData('country', response.country),
                    //     createData('externals', response.externals.tvrage),
                    //     createData('image', response.image.original),
                    //     createData('updated', response.updated),
                    //     createData('_links', response._links.self.href)
                    // )
                }
                console.log(rowss)
            });
    }, [match.params.id, rowss]);


    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Key</TableCell>
                        <TableCell align="right">Value</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.key}>
                            <TableCell component="th" scope="row">
                                {row.key}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default Detail;