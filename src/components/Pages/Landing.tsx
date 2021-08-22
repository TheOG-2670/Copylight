import React from "react";
import AppAppBar from "../../views/AppAppBar";
import ProductHero from "../../views/ProductHero";
import ProductCategories from "../../views/ProductCategories";


const Landing = () => {
    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHero />
            <ProductCategories />
        </React.Fragment>
    );
};

export default Landing;