import React, { useState } from 'react';
import './App.css';
import Header from './MainPage/Header/Header.js';
import TopScrollbar from './TopScrollBar/TopScrollBar';
import ContentBody from './MainPage/Body/Body';
import Cart from './MainPage/Cart/Cart.js';
import ClothesList from './MainPage/ClothesList/ClothesList/ClothesList';
import { Router, Route } from 'react-router-dom';
import history from './BrowserHistory'
import InspectedElement from './MainPage/ClothesList/ListElement/InspectedElement';
import CartPage from './MainPage/Cart/CartPage';


function App() {
  const [RenderState, setRenderState] = useState(<ClothesList></ClothesList>)
  return (

    <div className = "Wrapper" id ="Wrapper">
      <meta  content="width=device-width, initial-scale=1.0, user-scalable=0"></meta>
     <TopScrollbar></TopScrollbar>
     <Router history = {history}>
       <Route exact path = '/'>
       <Header></Header>
     <ContentBody></ContentBody>
       </Route>
      <Route path = '/InspectElement'>
    <InspectedElement></InspectedElement>
      </Route>
      <Route path ='/cart'>
        <CartPage></CartPage>
      </Route>
     </Router>

    </div>
  );
}

export default App;