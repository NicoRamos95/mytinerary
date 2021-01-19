import React, { Component } from "react";
import { Banner } from "./Banner";
import Tarjetas from "./Tarjetas";
import Cities from './Cities'

import {BrowserRouter, Route} from 'react-router-dom'

class Section extends Component {
  render() {
    return (
        <>
        <BrowserRouter>
            <Route exact path="/">
              <Banner/>
              <Tarjetas />
            </Route>
            <Route path="/cities" component={Cities}>
            </Route>
        </BrowserRouter>
        </>
    )
  }
}
export default Section