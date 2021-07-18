import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import theme from '../styles/theme';

const useStyles = makeStyles(theme => ({
    main: {
        minHeight: '80vh'
    }
}));

const Main = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={12} className={classes.main}>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
            >
                Main area
            </Typography>
        </Grid>
    );
}

export default Main;