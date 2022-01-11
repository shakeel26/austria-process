import React from 'react';
import { beforeStart } from '../data';
import Typography from '@material-ui/core/Typography';


const BeforeStart = () => {
    return (
        <>
            {beforeStart.map((info, index) =>
                <div key={index}>
                    <h3>{info.title} </h3>
                    <Typography>{info.desc} </Typography>
                </div>
            )}
        </>
    )
}

export default BeforeStart;