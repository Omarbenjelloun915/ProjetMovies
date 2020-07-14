import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./Components/Landing";
import Detail from "./Components/Detail";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css"

const App = () => {

  return (
    <Router>
      <Header text="Movies" />
      <Fragment>
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/detail/:id' component={Detail} />
          </Switch>
        </section>
      </Fragment>
      <Footer text="Réalisé par Omar Benjelloun" secondText="mail: omar.benjelloun@etu.enseeiht.fr" />
    </Router>
  );
};

export default App;

