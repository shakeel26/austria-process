import React from "react";
import Typography from '@material-ui/core/Typography';

const Admission = () => {
    return (
        <>
            <h3> Step 3 - Admission </h3>
            <Typography>
                Find all the study programs in Austria at <a href='https://www.studium.at/studieren'>studium.at</a>
                <br />
                Please follow the application process of your chosen study program and university on the respective site of the university.
                Some universities accept online application while some still ask application via snail mail.
            </Typography>
        </>
    );
}
export default Admission;