
import { useEffect, useState } from "react";
import {getProducts, getProductsByCategory} from "../../asyncmock";
import ItemList from "../ItemList";
import style from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [Items, setItems] = useState ([]);
    
    const { categoryId } = useParams()

    useEffect(() =>{
        if(!categoryId){     
        getProducts().then(resultado => setItems(resultado))
    }else {
        getProductsByCategory(categoryId).then(response => {
            setItems(response)
        })
    }
    }, [categoryId])
   
    
    return (
            
        <div className={style.container}>
            <ItemList products={Items}/>
        </div>
    )

}

export default ItemDetailContainer;