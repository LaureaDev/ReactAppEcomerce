import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
//import CartWidget from './components/CartWidget/CartWidget';
import itemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner.js'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner/>
      <itemDetailConteiner/>
    </div>
  );
}

export default App;
