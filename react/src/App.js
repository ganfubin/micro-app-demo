import React, {Suspense, lazy} from 'common/react';
import {BrowserRouter as Router, Switch, Route} from 'common/react-router-dom';
const Home = lazy(() => import('./Home'))


const App = () => {
  return (<Router>
    <Suspense fallback={'loading...'}>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Suspense>
  </Router>)
};

export default App;
