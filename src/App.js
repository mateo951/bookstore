import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Categories from './components/categories/Categories';
import List from './components/books/List';
import Form from './components/books/Form';

const App = () => (
  <Router>
    <Navigation />

    <Switch>
      <Route path="/">
        <List />
        <Form />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </Router>
);

export default App;
