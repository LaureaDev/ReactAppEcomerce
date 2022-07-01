
import './App.css';
import NavBar from './components/NavBar/NavBar.js'; 
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider  } from './context/Notification';
import  Formulario  from './components/Formulario/Formulario';

const  App = () => {

  return (
    <div className="App">
    <CartContextProvider>
    <NotificationProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element ={<ItemListConteiner greeting="Todos los productos" />} />
        <Route path='/category/:categoryId' element={<ItemListConteiner />}/>
        <Route path='/detail/:productosId' element= {<ItemDetailConteiner />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/formulario' element={ <Formulario />} /> 
      </Routes>
      </BrowserRouter>
      </NotificationProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
