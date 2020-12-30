import React from 'react';
import './BurgerMenu.css'
import history from '../BrowserHistory'

class BurgerMenu extends React.Component{
import 
    Clickfunc = () =>{
        const navigation = document.querySelector('.navigation')
        const hamburger = document.querySelector('.hamburger')
        hamburger.classList.toggle('hamburger--active');
        navigation.classList.toggle('navigation--active')
    }
    
    About_us =()=>{
        history.push('/O_Nas')
    }

    Contact = () =>{
        history.push('/Kontakt')
    }

    Lookbook = () =>{
        history.push('/lookbook')
    }

    render(){
       return(<div> <button id ="Burger " onClick = {this.Clickfunc}className="hamburger">
            <span className = "hamburger-box">
                <span className = "hamburger-inner">
                </span>
            </span>

        </button>
        <div className = "navigation">
        <div className = "navigation-list">
            <button className="Burger-menu-button" onClick = {this.About_us}> O nas</button>
            <button className="Burger-menu-button" onClick = {this.Contact}> Kontakt </button>
            <button className="Burger-menu-button" onClick = {this.Lookbook}> Kolekcja S/S 2020</button>
        </div>
        </div>
        </div>)
    }
}
export default BurgerMenu;