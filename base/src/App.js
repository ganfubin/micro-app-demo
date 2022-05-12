import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vue">vue</Link>
            </li>
            <li>
              <Link to="/react">react</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={'loading...'}>
          <Switch>
            <Route path="/" >
             <div id="app"></div>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
