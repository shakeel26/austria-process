import React from "react";
import { form } from "../data";


const AppointmentFormLink = () => {
    return (
        <>
             Download the AppointmentForm form {form.map((link, index) => <a key={index} href={link.link}>AppointmentFormLink</a>)}
        </>
    );
}

export default AppointmentFormLink;
