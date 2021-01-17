import React, { Component } from "react";
import { Formulario } from "./form";
import Tarjetas from "./tarjetas";

class Section extends Component {
  render() {
    return (
        <>
        <section>
        <Formulario />
        <Tarjetas />

        </section>
        </>
    )
  }
}
export default Section