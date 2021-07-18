import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
    footer: {
        minHeight: '5vh'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={12} className={classes.footer}>
            <Copyright />
        </Grid>
    );
};

export default Footer;