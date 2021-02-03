import Header from './pages/Header'
import './style.css'
import Footer from  './pages/Footer'
import Cities from './pages/Cities'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import City from "./components/City";
import Home from './pages/Home';
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <>
    <Header />
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/cities" component={Cities}/>
              <Route path="/cities/:id" component={City}/>
              <Route path="/register" component={Register}/>
              <Route path="/login"component={Login}/>
          </Switch>
        </BrowserRouter>
    <Footer />
  </>)
}

export default App;
