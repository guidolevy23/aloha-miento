import './App.css';
import Cards from './Components/cards';
import SearchBar from './Components/SearchBar/searchbar.jsx';

function App() {
  return (
    <div className="App">
      <h1>ALOHA-MIENTOS</h1>
      <p>DECILE HOLA AL HOGAR DE TUS SUEÑOS</p>
      <SearchBar/>
      <div className='caja'>
        <Cards/>
      </div>
      
    </div>
  );
}

export default App;
