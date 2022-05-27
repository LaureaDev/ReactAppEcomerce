import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById, getProducts } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById(id).then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail title={product?.name}/>
        </div>
    )
}

export default ItemDetailContainer
