import Button from 'react-bootstrap/Button'


export const Banner = () => {
  
    return (
      <div className="bg-r">
        <h3 className="bg-white text-center p-2" >Welcome everybody</h3>
        
      <div className="formulario">
        <img className="w-25 rounded-circle" src="./assets/banner.jpg" alt=""/>
        <div className=" d-flex align-items-center">
        <Button className="p-5 rounded-pill bg-white text-dark" href="/cities">See itineraries</Button>

        </div>
      </div>

      </div>)
}