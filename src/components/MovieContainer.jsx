import { useContext, useEffect, useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Movie from './Movie';
import Loading from './Loading';
import SearchContext from '../context/SearchContext';
import getMovies from '../apis/getMovies';

const MovieContainer = () => {
  const { searchText } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies(searchText);
        setMovies(data.Search || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchText]);

  return (
    <Container>
    {loading && <Loading />}
    {error && (
      
        {error}
     
    )}
    {movies.length === 0 && !loading && <Typography variant="body1">No movies found</Typography>}
    {movies.length > 0 && (
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
            <Movie movie={movie} />
          </Grid>
        ))}
      </Grid>
    )}
  </Container>
  );
}

export default MovieContainer;