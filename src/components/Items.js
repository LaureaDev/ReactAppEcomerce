import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount/ItemsCount'

function Items({img, name, id, price, stock }) {
  return (
    <Card key={id} style={{ width: '18rem' }}>
  <Card.Img className='card-img' variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
  </Card.Body>
  <ItemCount stock={stock}/>
</Card>
  )
}

export default Items