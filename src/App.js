import React, { useState } from 'react';
import './App.css';
import Header from './MainPage/Header/Header.js';
import TopScrollbar from './TopScrollBar/TopScrollBar';
import ContentBody from './MainPage/Body/Body';
import Cart from './MainPage/Cart/Cart.js';
import ClothesList from './MainPage/ClothesList/ClothesList/ClothesList';


function App() {
  const [RenderState, setRenderState] = useState(<ClothesList></ClothesList>)
  return (

    <div className = "Wrapper" id ="Wrapper">
      <meta  content="width=device-width, initial-scale=1.0, user-scalable=0"></meta>
     <TopScrollbar></TopScrollbar>
<Header></Header>
     <ContentBody></ContentBody>
    </div>
  );
}

export default App;