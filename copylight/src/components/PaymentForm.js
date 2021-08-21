import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
}));

export default function PaymentForm() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="firstName" label="First Name" fullWidth autoComplete="cc-name" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="lastName"
                        label="Last Name"
                        fullWidth
                        autoComplete="cc-name"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Cryptocurrency</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={currency}
                            onChange={handleChange}
                        >
                            <MenuItem value={"ETH"}>ETH</MenuItem>
                            <MenuItem value={"BTC"}>BTC</MenuItem>
                            <MenuItem value={"DOGE"}>DOGE</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember my details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}