import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Movie = ({ movie }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
            <CardMedia
                component="img"
                height="500"
                image={
                    movie.Poster === 'N/A'
                        ? 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
                        : movie.Poster
                }
                alt={movie.Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.Year}
                </Typography>
            </CardContent>
        </Card>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Poster: PropTypes.string,
        Year: PropTypes.string
    }).isRequired
};

export default Movie;
