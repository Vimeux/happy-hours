import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header';
import Bars from './pages/Bars';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <header className="App-header">
          <Switch>
            <Route path='/bars'>
              <Bars />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
