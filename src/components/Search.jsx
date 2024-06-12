import { useContext, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchContext from '../context/SearchContext';

const Search = () => {
    const [value, setValue] = useState('');

    const { setSearchText } = useContext(SearchContext);

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            return;
        }
        setSearchText(value);
        setValue('');
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={4}
            sx={{ width: '80%', maxWidth: '600px', margin: 'auto', pt: 4 }}
        >
            <form
                onSubmit={(e) => submitHandler(e)}
                style={{ display: 'flex', width: '100%' }}
            >
                <TextField
                    fullWidth
                    label="search movie"
                    id="fullWidth"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    sx={{ mr: 2 }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    id="button-addon2"
                    type="submit"
                >
                    Search
                </Button>
            </form>
        </Box>
    );
};

export default Search;
