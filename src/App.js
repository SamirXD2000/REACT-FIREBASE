import logo from './logo.svg';
import './App.css';
import ByGoogle from './components/ByGoogle';
//import { Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Registro } from './components/Registro';
import { Login } from './components/Login';
import { Inicio } from './components/inicio';
import { Navbar } from './components/Navbar';
import Nosotros from './components/Nosotros';
function App() {
  return (
    <Router>
      <Navbar/>
      <div className = 'py-3'>
        <Switch>
          <Route path = '/registro' component = {Registro}/>
          <Route path= "/inicio" component = {Inicio}/>
          <Route path = '/' component = {Login}/>
          <Route path = '/nosotros' component = {Nosotros}/>
        </Switch>
      </div>
      <ByGoogle/>
    </Router>
  );
}

export default App;
