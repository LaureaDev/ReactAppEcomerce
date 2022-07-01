import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from "../../services/firebase"
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { useNotification } from '../../context/Notification'

const Cart = () => {
    const { cart, getQuantity, getTotal, removeItem } = useContext(CartContext)  

    const { notify } = useNotification()
    const [order, setOrder] = useState({
        name: '',
        apellido: '',
        email: ''
    })

    
    const onSubmit = (data) =>{

        setOrder({
            name: data.nombre,
            apellido: data.apellido,
            email: data.email
        })
        createOrder()
    }
    const createOrder = () => {
        
        notify('Orden creada con Éxito')
        const objOrder = {
            buyer: order,
            items: cart,
            total: getTotal()
        }
        
    
    
        const ids = cart.map(prod => prod.id)
    
        const batch = writeBatch (db)

        const OfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if( dataDoc.stock >= prodQuantity ){
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    
                }else {
                    OfStock.push( {id: doc.id, ...dataDoc} )
                }
            })
        }).then(() => {
            if (OfStock.length === 0){
                const collectionRef = collection (db, 'orders')
                
                return addDoc(collectionRef, objOrder)
             
            }else {
                return Promise.reject( { type: 'of_stock', products: OfStock })
            }
        }).then(( {id} ) => {
            batch.commit()
            
            removeItem()
            notify(`el producto ${id}`)
        }).catch(error =>{
            console.log(objOrder)
            if(error.type === 'out_of_stock'){
                
            }
        })
    
    } 
        if(getQuantity() === 0) {
        return (<h1>Carrito de compras limpio</h1>)
        }

     return (     
        <div>
           {cart.map(p => <CartItem  key={p.id} {...p}/>) }
        
         <Button variant="primary" onClick={createOrder} >Generar Orden</Button> 
        </div>
    )

}
export default Cart