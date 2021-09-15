import React from "react";
import AppointmentFormLink from '../Appointment';
import { residence } from "../../data";


const ResidencePermit = () => {
    return (
        <>
            <h3> Step 5 - Residence Permit </h3>
            <h4>Fee: {residence.fee} </h4>
            <p>{residence.desc} </p>
            <h4> Required docs are: </h4>
            <ol>
                {Object.entries(residence.docs).map(([key, value]) => <li> {value}</li>)}
            </ol>

            <AppointmentFormLink />
        </>
    );
}

export default ResidencePermit;
