import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner greeting="LN Electronic" />
    </div>
  );
}

export default App;
