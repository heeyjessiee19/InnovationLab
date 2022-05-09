import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portada from './Portada/Portada';
import About from './About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path="/" exact>
          <Portada />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
