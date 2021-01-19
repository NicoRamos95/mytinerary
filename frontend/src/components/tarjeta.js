
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
const Tarjeta = ({items}) => {
  return (
    <>
    <div className="tarjeta d-flex flex-wrap">
      {items.map((item, index) => {
        return (
          <Card inverse>
            <CardImg className=""  src={`./assets/${item.imagen}`} alt={item.titulo} />
            <CardImgOverlay>
              <CardTitle tag="h5" className="titulo-card">{item.titulo}</CardTitle>
            </CardImgOverlay>
          </Card>
        )
      })}
    </div>
    </>
  )
  
}
export default Tarjeta