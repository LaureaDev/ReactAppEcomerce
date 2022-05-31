import './ItemDetail.css'

const ItemDetail = ({name, price}) => {
    return(
        <div>
            <h1>ItemDetail</h1>
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
        
    )
}

export default ItemDetail