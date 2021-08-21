import React from "react";
import AppAppBar from "../../views/AppAppBar";
import { Redirect } from 'react-router'

const Browsing = () => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return (
            <Redirect to="/signin" />
        )
    }
    else {
        return (
            <React.Fragment>
                <AppAppBar/>
            </React.Fragment>
        );
    }
};

export default Browsing;