import React from 'react';
import Containter from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh'
    }
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <Containter maxWidth="lg" className={classes.container}>
            <Header />
            <Main />
            <Footer />
        </Containter>
    )
};

export default Layout;
