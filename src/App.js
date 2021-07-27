import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>Search page</h1>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
