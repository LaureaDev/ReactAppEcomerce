import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()
    return (
        <Button variant="primary">
        Cart <Badge bg="secondary">{quantity}</Badge>

    </Button>
    )
}

export default CartWidget