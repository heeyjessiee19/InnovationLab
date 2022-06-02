import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Cover from './components/Cover/Cover';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Cover />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
