import React from 'react';
import Logo from '../../Header/cpt logo.png'
import './Congratulations.css'
class CongratulationsPage extends React.Component{


    render(){
        return(
            <div className ="Congratulations-Page">
                <div className = "Congrats-wrapper">
                <img src = {Logo} className="Logo"></img>
                <h2>Dziękujemy za złożenie zamówienia!</h2>
                <a href="/" className = "Back-Congrats">Wróć do strony głównej</a>
                </div>
            </div>
        );
    }
}
export default CongratulationsPage;