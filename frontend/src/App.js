/* eslint-disable no-redeclare */
import Header from './pages/Header'
import './style.css'
import Footer from  './pages/Footer'
import Cities from './pages/Cities'

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import City from "./components/City";
import Home from './pages/Home';
import Register from './components/Register'
import Login from './components/Login'
import { connect } from 'react-redux'

const App = (props) => {
  if (props.loggedUser) {
    var routes = <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cities" component={Cities}/>
      <Route path="/cities/:id" component={City}/>
      <Redirect to="/cities" />
      </Switch>
  } else {
    var routes = <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login"component={Login}/>
      <Redirect to="/" />
      </Switch>
  }
  return (
    <>
    {console.log(props)}
      <BrowserRouter>
        <Header />
        {routes}
        <Footer />
      </BrowserRouter>
  </>)
}
const mapStateToProps = state => {
  return {
    loggedUser: state.authR.loggedUser
  }
}
export default connect(mapStateToProps)(App)
