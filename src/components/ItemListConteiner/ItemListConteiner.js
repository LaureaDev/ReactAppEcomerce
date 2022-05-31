import { useEffect, useState } from "react";
import {getProducts} from "../../asyncmock";
import ItemList from "../ItemList";
import style from "./ItemListContainer.module.css"

const ItemDetailConteiner = () => {
    const [Items, setItems] = useState ([]);
    
    useEffect(() =>{
        getProducts()
        .then(resultado => setItems(resultado))
    }, [Items])
   
    
    return (
        
        <div className={style.container}>
            <ItemList products={Items}/>
        </div>
    )

}

export default ItemDetailConteiner;