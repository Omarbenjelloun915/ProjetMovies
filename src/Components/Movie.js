import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const DEFAULT_IMAGE =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #DCF0E6 30%, #DCF0E6 90%)',
        maxWidth: 600,
    },
    media: {
        height: 240,
        width: 'auto',
        margin: 'auto'
    },
    text: {
        // color: "black"
    },
});

const Movie = ({ movie }) => {
    const classes = useStyles();
    return (
        <div className="movie">
            <Card className={classes.root} >
                <CardActionArea >
                    <CardContent >
                        <Link to={`/detail/${movie.show.id}`}>
                            <Typography className={classes.text} variant="h5" component="h2">
                                {movie.show.name}
                            </Typography>
                        </Link>

                    </CardContent>
                    <Link to={`/detail/${movie.show.id}`}>
                        <CardMedia
                            className={classes.media}
                            image={movie.show.image === null ? DEFAULT_IMAGE : movie.show.image.original}
                            title="Click here for more informations"
                        />
                    </Link>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default Movie;