import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';

import Home from './pages/Home';
import Advice from './pages/Advice'
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/advice" exact  component={Advice} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>

      <GlobalStyle />
    </>
  );
}

export default App;
