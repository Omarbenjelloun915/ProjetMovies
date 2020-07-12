import React, { useEffect } from 'react';
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
        minWidth: 650,
    },
});

function createData(key, value) {
    return { key, value };
}

const Detail = (match) => {
    const rows = [];
    // const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/lookup/shows?tvrage=${match.params.id}`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    rows.push(createData('name', response.name),
                        createData('url', response.url), createData('type', response.type), createData('language', response.language), createData('genre', response.genre), createData('status', response.status), createData('runtime', response.runtime), createData('premiered', response.premiered), createData('officialSite', response.officialSite), createData('schedule', response.schedule), createData('rating', response.rating), createData('weight', response.weight), createData('network', response.network), createData('webChannel', response.webChannel), createData('country', response.country), createData('externals', response.externals), createData('image', response.image), createData('summary', response.summary), createData('updated', response.updated), createData('_links', response._links), createData('previousepisode', response.previousepisode))
                }
            });
    }, [match.params.id, rows]);


    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>

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