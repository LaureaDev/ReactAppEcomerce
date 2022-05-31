import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
//import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner/>
      <ItemDetailConteiner id={5}/>
    </div>
  );
}

export default App;
