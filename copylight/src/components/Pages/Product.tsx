import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppAppBar from "../../views/AppAppBar";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));



export default function Product() {
    const classes = useStyles();

    function playSound() {
        const sound = document.getElementById("audio");
        // @ts-ignore
        sound.play();
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppAppBar/>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            WE LOVE TO BOOGIE
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            MONSTERCAT
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://unsplash.com/photos/88jdTjSu914/download?force=true&w=1920"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <audio id="audio" src="https://www.soundjay.com/buttons/button-42.mp3"/>
                                            <IconButton onClick={playSound}><PlayCircleFilledIcon/></IconButton>
                                        </Typography>
                                        <Typography>
                                            Price: <b>0.02 ETH</b>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Add to cart
                                        </Button>
                                        <Button size="small" color="primary" href="/browse">
                                            Back to browse
                                        </Button>
                                    </CardActions>
                                </Card>
                </Container>
            </main>
        </React.Fragment>
    );
}