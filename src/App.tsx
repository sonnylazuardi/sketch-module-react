import React from 'react';
import AboutScreen from './plugins/about/AboutScreen';
import NameGeneratorScreen from './plugins/name-generator/NameGeneratorScreen';

import { HashRouter as Router, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={AboutScreen} />
      <Route path="/nameGenerator" component={NameGeneratorScreen} />
    </Router>
  );
};

export default App;
