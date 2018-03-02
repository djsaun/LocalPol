import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import NotFound from './NotFound'
import Representatives from './Representatives';

const App = () => (
  <div>
    <Header />

    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/representatives" component={Representatives} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

export default App;
