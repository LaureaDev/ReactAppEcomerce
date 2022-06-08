import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
function Items({img, name, id, price }) {
  return (
    <Card className='CardItem' style={{ width: '18rem' }}>
  <Card.Img className='card-img' variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
       $ {price}
    </Card.Text>
  </Card.Body>
  <div>
  <Link to={`/detail/${id}`} className='BTN'> Ver detalles</Link>
  </div>
</Card>
  )
}

export default Items