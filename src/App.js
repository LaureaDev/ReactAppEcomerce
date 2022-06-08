
import './App.css';
import NavBar from './components/NavBar/NavBar.js'; 
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const  App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element ={<ItemListConteiner greeting="Todos los productos" />} />
        <Route path='/category/:categoryId' element={<ItemListConteiner greeting="Algo de algo"/>}/>
        <Route path='/detail/:productosId' element= {<ItemDetailConteiner/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
