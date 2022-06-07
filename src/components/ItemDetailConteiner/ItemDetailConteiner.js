import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    console.log(product)
    const { productosId } = useParams()
    useEffect(() => {
        getProductsById(productosId).then(product => {
            setProduct(product)
        })
    }, [productosId])

    return(
        
            <ItemDetail {...product}/> 
    )
}

export default ItemDetailContainer
