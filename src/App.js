import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
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
