import './App.css';
//import CountClass from './components/CountClass/CountClass';
import NavBar from './components/NavBar/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
//import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemsCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <formControl/>
      <ItemListConteiner greeting="LN Electronic" />
      <ItemCount/>
    </div>
  );
}

export default App;
