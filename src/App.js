import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './screens/Home';
import Navbar from './components/Head/Navbar';
import Footer from './components/Footer';
import Programs from './screens/Programs';
import Error404 from './screens/Error404';

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/austria-process' component={Home} />
          {/* <Route exact path="/programs" component={Programs} />
          <Route exact path="/degree/:degreeName" component={Programs} /> */}
          <Route exact from="*" component={Error404} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
