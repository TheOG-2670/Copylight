import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, {styles as toolbarStyles} from '../components/Toolbar';

const styles = (theme) => ({
    title: {
        fontSize: 30,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    linkSecondary: {
        color: theme.palette.common.black,
    },
});

function AppAppBar(props) {
    const {classes} = props;
    const isAuthenticated = true;
    const username = "";

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}/>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        href="/"
                    >
                        {"©"}
                    </Link>
                    <div className={classes.right}>
                        <Link
                            variant="h6"
                            underline="none"
                            className={clsx(classes.rightLink)}
                            href="/browse"
                        >
                            {'Browse'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            className={clsx(classes.rightLink)}
                            href="/payment"
                        >
                            {'Cart'}
                        </Link>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                            href="/signin/"
                        >
                            {'Sign In'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                            href="/signup/"
                        >
                            {'Sign Up'}
                        </Link>
                        {isAuthenticated && <Link
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                        >
                            {username}
                        </Link>}

                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder}/>
        </div>
    );
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
