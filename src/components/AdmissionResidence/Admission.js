import React from "react";
import Typography from '@material-ui/core/Typography';

const Admission = () => {
    return (
        <>
            <h3> Step 2 - Admission </h3>
            <Typography> There is <strong>NO</strong> Admission application fee in public universities</Typography>
            <Typography>Per Semester fee for Master program is <strong>746 </strong>Euros/semester</Typography>
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