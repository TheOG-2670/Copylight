import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles as toolbarStyles } from '../components/Toolbar';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

const styles = (theme) => ({
    title: {
      fontSize: 30,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      justifyContent: 'space-between',
    }
  });

function AppBrowse() {
 
    return (
        <div>
            <Grid 
                container spacing={2}
                alightItems='center'
            >
                <Grid 
                    item md={4}
                >
                <ProductCard/>
                </Grid>
                <Grid
                    item md={4}
                ><ProductCard/>
                </Grid>
                <Grid
                    item md={4}
                ><ProductCard/>
                </Grid>
                <Grid
                    item md={4}
                ><ProductCard/>
                </Grid>
                <Grid 
                    item md={4}
                >
                <ProductCard/>
                </Grid>
                <Grid 
                    item md={4}
                >
                <ProductCard/>
                </Grid>
            </Grid>
        </div>
    );
 };

 AppBrowse.propTypes = {
    classes: PropTypes.object.isRequired,
  };

 export default withStyles(styles)(AppBrowse);