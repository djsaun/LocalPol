import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import NotFound from './NotFound'
import Local from './Local';

const App = () => (
  <div>
    <Header />

    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/local" component={Local} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

export default App;
