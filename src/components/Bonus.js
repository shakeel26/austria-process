import React from "react";
import { bonus } from "../data";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const BonusInformation = () => {

    return (
        <>
            <h3> Bonus Information </h3>
            <Divider />
            <Typography>{bonus.desc} </Typography>

        </>
    );
}

export default BonusInformation;
