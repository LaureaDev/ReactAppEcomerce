import './App.css';
//import CountClass from './components/CountClass/CountClass';
import NavBar from './components/NavBar/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
//import CartWidget from './components/CartWidget/CartWidget';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner/>
    </div>
  );
}

export default App;
