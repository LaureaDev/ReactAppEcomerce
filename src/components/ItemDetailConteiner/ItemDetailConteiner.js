import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    const { productosId } = useParams()
    useEffect(() => {
        getProductsById(parseInt (productosId)).then(product => {
            setProduct(product)
        })
    }, [productosId])

    return(
        
            <ItemDetail {...product}/> 
    )
}

export default ItemDetailContainer
