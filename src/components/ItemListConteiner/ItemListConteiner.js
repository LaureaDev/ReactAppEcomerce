import { useEffect, useState } from "react";
import products from "../../asyncmock";
import customFetch from "../CustomFetch";
import ItemList from "../ItemList";
import style from "./ItemListContainer.module.css"

const ItemListConteiner = () => {
    const [Items, setItems] = useState ([]);
    
    useEffect(() =>{
        customFetch(2000, products)
        .then(resultado => setItems(resultado))
    }, [Items])
    console.log(Items)
    
    return (
        
        <div className={style.container}>
            <ItemList products={Items}/>
        </div>
    )

}

export default ItemListConteiner;