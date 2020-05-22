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
    

    render(){
       return(<div> <button id ="Burger " onClick = {this.Clickfunc}className="hamburger">
            <span className = "hamburger-box">
                <span className = "hamburger-inner">
                </span>
            </span>

        </button>
        <div className = "navigation">
        <ul className ="navigation-list">
                <li className ="navigation-item">O nas</li>
                <li className ="navigation-item">LookBook SS 2020</li>
                <li className ="navigation-item">Kontakt</li>

            </ul>
        </div>
        </div>)
    }
}
export default BurgerMenu;