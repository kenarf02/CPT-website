import React from 'react';
import './App.css';
import Header from './MainPage/Header/Header.js';
import TopScrollbar from './TopScrollBar/TopScrollBar';
import ContentBody from './MainPage/Body/Body';

function App() {
  return (
    <div className = "Wrapper">
     <TopScrollbar></TopScrollbar>
<Header></Header>
     <ContentBody></ContentBody>
    </div>
      
  );
}


export default App;
