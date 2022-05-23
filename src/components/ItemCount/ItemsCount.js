import { useState } from "react"
import Button from 'react-bootstrap/button'
const ItemCount = () =>{

   const [count, setCount] = useState(0)
   const decrement =  () =>{
      setCount(count -1)
   }
   const increment = () =>{
       setCount(count + 1)
   }
   
   
    return (
        <div className="botones">
            <Button onClick={increment} variant="outline-success">Sumar</Button>
            <h1>{count}</h1>
            <Button onClick={decrement} variant="outline-danger">Restar</Button>
        </div>
    )

}

export default ItemCount