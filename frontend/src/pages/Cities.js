/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { Component} from "react"
import { Link } from "react-router-dom"
import { Card, CardTitle, Form} from 'reactstrap'
import {FormGroup, Input,} from 'reactstrap'
import MyLoader from "../components/Loader";

class Cities extends Component {
  

  //metodo que inicia inmediatamente despues de llamar al componente y llena el estado con los datos
  componentDidMount = () => {
    fetch('http://localhost:4000/api/cities')
    .then(response => response.json())
    .then(items => {
      this.setState({original: items.respuesta, data: items.respuesta, loader: false})
      
    })
    .catch(error => console.log('Error:', error))
  }
  //creando el estado con propiedades a usar 
  state = {
    loader: true,
    data:[],
    original:[]
  }

  //funcion para escuchar el input del buscador y retorna un estado
  handleChange = event => {
    event.persist()
    var search = this.state.original.filter(item => {
      return item.cityName.toUpperCase().indexOf(event.target.value.toUpperCase().trim()) === 0
    })
    //llena estado data con lo introducido y comparado en la funcion
    this.setState({data: search}) 
    
  }
  //funcion para filtrar los datos retornando un item para comparar con el estado filter
  loading = () => {
    if (this.state.loader) {
      return (
        <MyLoader/>
      )
    }
    if (this.state.loader === false && this.state.data.length == 0) {
       return (
        <div className="not-found bg-primary text-light">
          <h1>Cities no found</h1>
        </div>)
    }
  }

    render() {
      return (
        <>
          <div>
            <h2 className="bg-primary m-3 rounded-pill text-center">Cities</h2>
            <div className="d-flex justify-content-center">
              <Form>
                <FormGroup>
                  <div className="d-flex-inline text-center">
                    <Link className="text-center backcities mb-5" to="/"><i className="fas fa-arrow-circle-left d-flex justify-content-center"></i>Go Back to Home</Link>
                    <Input className="text-center m-2" value={this.state.filter} onChange={this.handleChange} placeholder="Search City"/>
                  </div>
                  {this.loading()}
                  {
                  //creando imagenes con los datos que salen de la funcion filterElement
                  this.state.data !== 0 && !this.state.loader ?
                    this.state.data.map((item, index) => (
                      <Link className="cities" to={`/cities/${item._id}`} key={item._id}>
                          <Card inverse className={index % 2 === 0 ? 'image-r':'image-l'} style={{backgroundImage: `url(./assets/${item.cityPic})`}}>
                            <CardTitle tag="h3" className={index % 2 === 0 ? 'titulo-card':'titulo-card-l'}>{item.cityName}</CardTitle>
                          </Card>
                      </Link>
                      )) : 
                      <div></div>
                  }
                </FormGroup>
              </Form>
            </div>
          </div>
        </>)
    }
}
export default Cities