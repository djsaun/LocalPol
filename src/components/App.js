import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import NotFound from './NotFound'
import '../styles/App.css'

const App = () => (
  <div className="App">
    <Header />

    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

export default App;
