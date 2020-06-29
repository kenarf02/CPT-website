import React from 'react';
import './ContactPage.css'
class ContactPage extends React.Component{

    render(){
        return(
        <div className = "ContactPage">
            <span>
                <h1>Dane Firmy</h1>
                <p>CPT Brand Kacper Ociepka</p>
                <p>ul. Dupna 1</p>
                <p>71-369 Szczecin</p>
                <p>NIP: 6969696969</p>
            </span>
            <span>
                <h1>Biuro Obsługi Klienta</h1>
                <p>Mail: CPt@Brand.twujstary.pl</p>
            </span>
            <div>
                <h1>Odezwij się do nas</h1>
                <form class="Contact-form">
                    <div className = "Contact-Names"> 
                    <input className="Name-Contact" type ="text" id= "Name"></input>
                    <input className ="E-mail-Contact" type ="text" id= "E-mail"></input>
                    </div>
                    <div>
                        <textarea id= "Description"></textarea>
                    </div>
                    <input className ="Submit-Contact" type="submit" value="Prześlij wiadomość"></input>
                </form>
            </div>
        </div>
        );
    }
}
export default ContactPage;