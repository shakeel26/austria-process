import React from "react";
import AppointmentFormLink from '../Appointment';
import { visaD } from "../../data";


const VisaD = () => {
    return (
        <>
            <h3> Step 6 - Visa D </h3>
            <h4>Fee: {visaD.fee} </h4>
            <p>{visaD.desc} </p>
            <h4> Required docs are: </h4>
            <ol>
                {Object.entries(visaD.docs).map(([key, value]) => <li> {value}</li>)}
            </ol>
            <AppointmentFormLink />
        </>
    );
}

export default VisaD;
