import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import AppAppBar from "../views/AppAppBar";
import {Redirect} from "react-router";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Terms and Conditions', 'Payment details', 'Review your order'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        if (activeStep === 2 ) {var Tx = require('ethereumjs-tx').Transaction
        const Web3 = require('web3')
        const web3 = new Web3('HTTP://127.0.0.1:7545')

        const account1 = '0xD3e02aA333D61AF4023D945A9C729585267e118b'
        const owner = '0xd740e5E5BBfe1081631D78AdFF0aE9244aE87649'
        const privatekey = 'de39962d5e2aafac16b9b9cb7b97857764741aae21a879fb9f935e5589dfdb3b'

        const privateKey1 = Buffer.from(privatekey, 'hex')


        // Deploy the contract
        web3.eth.getTransactionCount(account1, (err, txCount) => {
        const data = '0x60806040526040516103e53803806103e583398181016040528101906100259190610081565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100fc565b60008151905061007b816100e5565b92915050565b600060208284031215610097576100966100e0565b5b60006100a58482850161006c565b91505092915050565b60006100b9826100c0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6100ee816100ae565b81146100f957600080fd5b50565b6102da8061010b6000396000f3fe6080604052600436106100295760003560e01c806327e235e31461002e57806349c15bd91461006b575b600080fd5b34801561003a57600080fd5b506100556004803603810190610050919061016a565b610075565b60405161006291906101fb565b60405180910390f35b61007361008d565b005b60006020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156100f5573d6000803e3d6000fd5b507f3938ed494a2ac43205578f4190dcbdd61333ef5924e2db9ff8e6c3a204f840a6600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333460405161014b939291906101c4565b60405180910390a1565b6000813590506101648161028d565b92915050565b6000602082840312156101805761017f610288565b5b600061018e84828501610155565b91505092915050565b6101a081610252565b82525050565b6101af81610216565b82525050565b6101be81610248565b82525050565b60006060820190506101d96000830186610197565b6101e660208301856101a6565b6101f360408301846101b5565b949350505050565b600060208201905061021060008301846101b5565b92915050565b600061022182610228565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061025d82610264565b9050919050565b600061026f82610276565b9050919050565b600061028182610228565b9050919050565b600080fd5b61029681610216565b81146102a157600080fd5b5056fea2646970667358221220893eb02bf2b183bce38de151c542f847350732fd35a08d3335c09eb40c4b767564736f6c63430008070033'

        const txObject = {
            nonce:    web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            data: data
        }

        const tx = new Tx(txObject)
        tx.sign(privateKey1)

        const serializedTx = tx.serialize()
        const raw = '0x' + serializedTx.toString('hex')

        web3.eth.sendSignedTransaction(raw, (err, txHash) => {
            console.log('err:', err, 'txHash:', txHash)
            // Use this txHash to find the contract on Etherscan!
        })
        })
        
        web3.eth.sendTransaction({from: account1, to: owner, value: web3.utils.toWei('1','ether')})
        
        
        
    };}
        

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const isAuthenticated = true;

    if (!isAuthenticated) {
        return (
            <Redirect to="/signin" />
        )
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppAppBar/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation. You will receive your Music License Agreement shortly.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}