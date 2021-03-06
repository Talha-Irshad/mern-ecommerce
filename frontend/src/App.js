import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">React E-Commerce Project</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ ProductScreen }></Route>
        <Route path="/" component={ HomeScreen } exact ></Route>
        
      </main>
      <footer className="row center">
        <p>All Rights Reserved</p>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
