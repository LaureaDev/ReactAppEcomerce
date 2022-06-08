import './ItemDetail.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
import { Link } from 'react-router-dom'


const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p className='cantidad'>{count}</p>
            <Button variant="danger" onClick={decrement}>-</Button>
            <Button variant="success" onClick={increment}>+</Button>
            <Button onClick={() => onConfirm(count)}>Agregar al carrito</Button>
        </div>
    )
}

const ItemDetail = ({ img, name, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const onAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }
    

    return(
        <div className='CardItem'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>ItemDetail</Card.Title>
                    <Card.Text className='cate'>
                     {name}
                     </Card.Text>
                     <Card.Text className='price'>
                        ${price}
                    </Card.Text>
                    { quantity > 0 ? <Link to='/cart' className='BTN'> Finalizar </Link> : <ButtonCount stock={stock} onConfirm={onAdd}/>}
            </Card.Body>
        </Card>
        </div>
      
    )
}

export default ItemDetail