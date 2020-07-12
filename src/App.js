import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./Components/Landing";
import Detail from "./Components/Detail";
import "./App.css"

const App = () => {

  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/detail/:id' component={Detail} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;

