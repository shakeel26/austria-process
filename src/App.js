import React from 'react';
import Divider from '@material-ui/core/Divider';
import About from './components/Head/About';
import Navbar from './components/Head/Navbar';
import Documentation from './components/Documentation/Documentation.js';
import AdmissionResidence from './components/AdmissionResidence/AdmissionResidence';
import Footer from './components/Footer';
import BeforeStart from './components/BeforeStart';


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
<Footer />

</>
  );
}

export default App;
