import React from "react";
import AppointmentFormLink from '../Appointment';
import { legalization } from "../../data";


const Legalization = () => {
    return (
        <>
            <h3> Step 2 - Legalization </h3>
            <h4>Fee: {legalization.fee} </h4>
            <p>{legalization.desc} </p>
            <h4> Required docs are: </h4>
            <ol>
                {Object.entries(legalization.docs).map(([key, value]) => <li> {value}</li>)}
            </ol>
            <AppointmentFormLink />
        </>
    );
}

export default Legalization;
