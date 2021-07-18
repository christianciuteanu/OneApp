import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, makeStyles, TextField, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    toolbar: { borderBottom: `1px solid ${theme.palette.divider}`, },
    root: {
        minHeight: '15vh'
    },
    search: {
        minWidth: '100%'
    },
    signin: {
        textAlign: 'right'
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={12} className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Grid container>
                    <Grid item xs={2} md={2} className={classes.title} >
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="left"
                            noWrap
                        >
                            OneApp
                        </Typography>
                    </Grid>
                    <Grid item item xs={8} md={8}>
                        <TextField
                            InputProps={{
                                endAdornment: <SearchIcon />
                            }}
                            placeholder="Search"
                            className={classes.search} />
                    </Grid>
                    <Grid item xs={2} md={2} className={classes.signin}>
                        <Button variant="contained">SignIn</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </Grid>
    );
};

export default Header;