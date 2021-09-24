import React from 'react';
import Divider from '@material-ui/core/Divider';
import About from './components/Head/About';
import Navbar from './components/Head/Navbar';
import Documentation from './components/Documentation/Documentation.js';
import AdmissionResidence from './components/AdmissionResidence/AdmissionResidence';
import Footer from './components/Footer';
import BeforeStart from './components/BeforeStart';
import FAQ from './components/FAQ';

const App = () => {
  return (
<>
<Navbar />
<About />
<Divider />
<BeforeStart/>
<Divider/>
<Documentation />
<Divider />
<AdmissionResidence />
<Divider />
<FAQ />
<Footer />

</>
  );
}

export default App;
