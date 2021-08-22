import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShopIcon from '@material-ui/icons/Shop';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function AlbumCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        WE LOVE TO BOOGIE
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        MONSTERCAT
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Typography variant="subtitle2" color="textSecondary">Price: 0.05 ETH</Typography>
                <IconButton size="small" href="/product">
                    <ShopIcon/>
                </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image="https://unsplash.com/photos/88jdTjSu914/download?force=true&w=640"
                title="We Love to Boogie"
            />
        </Card>
    );
}