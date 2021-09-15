import React from 'react';
import Divider from '@material-ui/core/Divider';
import About from './components/Head/About';
import Navbar from './components/Head/Navbar';
import Documentation from './components/Documentation/Documentation.js';
import AdmissionResidence from './components/AdmissionResidence/AdmissionResidence';
import Arrival from './components/Arrival/Arrival';
import Footer from './components/Footer';



function App() {
  return (
<>
<Navbar />
<About />
<Divider />
<Documentation />
<Divider />
<AdmissionResidence />
<Divider />
<Arrival />
<Divider />
<Footer />

</>
  );
}

export default App;
