import React from "react";
import AppointmentFormLink from '../Appointment';
import { verification } from "../../data";


const Verification = () => {
    return (
        <>
            <h3> Step 1 - Verification </h3>
            <h4>Fee: {verification.fee} </h4>

            <p>{verification.desc} </p>
            <h4> Required docs are: </h4>
            <ol>
                {Object.entries(verification.docs).map(([key, value]) => <li> {value}</li>)}
            </ol>

            <AppointmentFormLink />
        </>
    );
}

export default Verification;
