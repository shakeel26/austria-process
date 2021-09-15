import React from "react";
import { form } from "../data";


const AppointmentFormLink = () => {
    return (
        <>
             Download the AppointmentForm form {form.map((link) => <a href={link.link}>AppointmentFormLink</a>)}
        </>
    );
}

export default AppointmentFormLink;
