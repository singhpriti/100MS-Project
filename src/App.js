import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './components/Navbar';
import CharList from './components/CharList';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />


        <Switch>
          <Route exact path="/" component={CharList} />
          <Route exact path="/About" component={About} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;

