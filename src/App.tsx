import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import Nav from './components/Nav';
import LearnMore from './pages/LearnMore';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/learnmore' component={LearnMore} />
          <Route path='/questions'/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
