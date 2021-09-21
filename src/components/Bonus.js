import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { bonus } from "../data";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    easyLegalization: {
        variant: "body2",
        fontStyle: 'italic'
    }
});

const BonusInformation = () => {
    const classes = useStyles();

    return (
        <>
            <h3> Bonus Information </h3>
            <Divider />
            <Typography>{bonus.desc} </Typography>

        </>
    );
}

export default BonusInformation;
