import React from "react";
import AppAppBar from "../../views/AppAppBar";
import { Redirect } from 'react-router'
import AlbumCard from "../AlbumCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        margin: 'auto',
        maxWidth: 1500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const Browsing = () => {
    const classes = useStyles();
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return (
            <Redirect to="/signin" />
        )
    }
    else {
        return (
            <div style={{ backgroundColor: "#242424"}}>
            <React.Fragment>
                <AppAppBar/>
                    <Paper className={classes.paper}>
                        <Grid container   direction="row"
                              justifyContent="center"
                              alignItems="center"><Typography component="h2" variant="h2">Browse the Collection</Typography></Grid>
                        <br/>
                        <br/>
                        <Grid container direction="row" spacing={5}>
                            <Grid item xs={3} direction="row">
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3}  >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} direction="row">
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3}  >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} direction="row">
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3}  >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} direction="row">
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3}  >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3}  >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} direction="row">
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3} >
                                <AlbumCard/>
                            </Grid>
                            <Grid item xs={3}  >
                                <AlbumCard/>
                            </Grid>
                        </Grid>
                    </Paper>
            </React.Fragment>
    </div>
        );
    }
};

export default Browsing;