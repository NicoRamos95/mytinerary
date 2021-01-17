import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export const Formulario = () => {

  const registro = () => {
    return (
      alert("Click in register")
    )
  }
  const verCiudades = () =>{
    return(
    alert("Click in itinerary")

    )
  }
    return (
      <div className="bg-r">
        <h3 className="bg-white text-center p-2" >Welcome everybody</h3>
        
      <div className="formulario">
        <img className="w-25 rounded-circle" src="./assets/banner.jpg" alt=""/>
        <div className=" d-flex align-items-center">
        <Button className="h-25 rounded-pill bg-white text-dark"onClick={verCiudades}>See itineraries</Button>

        </div>
        <div>
          <h3 className="titulo text-center">Register</h3>
          <Form className="w-100">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-light">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="button">
                <Button variant="light" onClick={registro}>
                    Submit
                </Button>
            </div>
          </Form>
        </div>
      </div>

      </div>)
}