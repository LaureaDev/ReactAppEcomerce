import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from "../../services/firebase"
import Button from "react-bootstrap/esm/Button"
import { useNotification } from '../../context/Notification'


const Cart = () => {
    const { cart, getQuantity, getTotal, removeItem, order } = useContext(CartContext)  

    const { notify } = useNotification()

    const createOrden = () => {
        
        notify('Orden creada con Éxito')
        const objetoOrden = {
            buyer: order,
            items: cart ,
            total: getTotal()
        }
        
    console.log(objetoOrden)

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
                
                return addDoc(collectionRef, objetoOrden)
             
            }else {
                return Promise.reject( { type: 'of_stock', products: OfStock })
            }
        }).then(( {id} ) => {
            batch.commit()
            notify (`La orden es: ${id}`)
            
            removeItem()
        }).catch(error =>{
            
            if(error.type === 'out_of_stock'){
        
            }
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