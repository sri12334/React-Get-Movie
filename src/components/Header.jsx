import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = ({ title }) => {
    return (
        <header>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                    >
                        <Typography
                            variant="h6"
                            color="inherit"
                            component="div"
                            sx={{ textAlign: 'center' }}
                        >
                            {title}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
