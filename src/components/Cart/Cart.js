import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../services/firebase"
import Button from "react-bootstrap/esm/Button"

const Cart = () => {
    const { cart, getQuantity, getTotal } = useContext(CartContext)  

    const createOrden = () => {
        console.log(' orden creada')
    
    const objetoOrden = {
        comprador: {
            nombre: 'Juan',
            apellido: 'Perez',
            email: 'juanperez@gmail.com',
            direccion: 'Calle falsa 123',
            telefono: '123456789',
            dni: '12345678'
        }, 
        items: cart,
        total: getTotal()
    }
    console.log(objetoOrden)

    const collectionRef = collection(db, 'ordenes')

    addDoc (collectionRef, objetoOrden).then(({id}) => {
        console.log(`Se creo la orden con el ${id}`)
    })
}

    if(getQuantity() === 0) {
        return (
            <h1>Carrito de compras limpio</h1>
        )
    }

    return (     
        <div>
           {cart.map(p => <CartItem  key={p.id} {...p}/>) }

            <Button variant="primary" onClick={createOrden}>Generar Orden</Button>
        </div>
    )
}

export default Cart