import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./screens/home";
import Details from "./screens/details";

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/details'} component={Details} />
    </Router>
  );
}

export default App;
