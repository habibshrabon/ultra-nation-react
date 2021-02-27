import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import { configure } from '@testing-library/react';
import Cart from './components/Country/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
    .catch(error =>console.log(error))
  }, []);

  const handelAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  
  return (
    <div className="App">
      <h1>Country load: {countries.length}</h1>
      <h2>Country Added: {cart.length}</h2>
      <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handelAddCountry={handelAddCountry} key={country.alpha3Code}></Country>)
        }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
