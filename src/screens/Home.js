import React from 'react';
import Divider from '@material-ui/core/Divider';
import About from '../components/Head/About';
import Documentation from '../components/Documentation/Documentation.js';
import AdmissionResidence from '../components/AdmissionResidence/AdmissionResidence';
import BeforeStart from '../components/BeforeStart';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
<>
<About />
<Divider />
<BeforeStart/>
<Divider/>
<Documentation />
<Divider />
<AdmissionResidence />
<Divider />
<FAQ />
</>
  );
}

export default Home;
