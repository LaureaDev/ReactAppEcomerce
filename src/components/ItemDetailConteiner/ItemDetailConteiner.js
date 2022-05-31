import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById(5).then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div className='ItemDetailConteiner'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailConteiner
