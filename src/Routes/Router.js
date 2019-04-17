import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppProvider } from '../Contexts/AppContext'

import Home from '../Screens/Home';
import Blog from '../Screens/Blog';
import Skills from '../Screens/Skills';

/**
* AppRouter
*/
class AppRouter extends Component {
  render() {
    return (
      <Router>
        <AppProvider>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/skills" exact component={Skills} />
        </AppProvider>
      </Router>
    )
  }
}

export default AppRouter;