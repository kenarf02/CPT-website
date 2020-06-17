import React from 'react';
import './InspectedElement.css'
import ClothesList from '../ClothesList/ClothesList';
import ReactDOM from 'react-dom';
import App from '../../../App';
import cross from './close.svg'
import Cart from '../../Cart/Cart'
import history from '../../../BrowserHistory'

class Item{
    id= 0;
 Cost = 0;
 url = "";
 name= "";
 size = "";
 TonBack = "Yes";
}

class InspectedElement extends React.Component{
    state={
name:'',
Cost:0,
url :''
};
    componentDidMount(){
        this.setState({
            name:window.$InspectObjProps.name,
            cost:window.$InspectObjProps.cost,
            url:window.$InspectObjProps.url
        });
        if(window.$InspectObjProps.cost ===0){
            history.push('/')
        }
    }

    AddToCart =()=>{
        
        var param = new Item;
        param.Cost = this.state.cost;
        param.url = this.state.url;
        param.name = this.state.name;
        param.id = Cart.List.length;
        console.log(param.id)
        param.size = document.getElementById("Size").value;
        param.TonBack = document.getElementById("TOnBack").value;
        Cart.List.push(param);
        window.localStorage.setItem("Cart",JSON.stringify(Cart.List))
    }

    render(){
        return(
            <div className ="InspectedElement">
                <img src ={this.state.url} className="Inspect-Img"></img>

<div className="Storage">

            <h1 className="Inspect-Name">{this.state.name}</h1>
            <h2 className="Inspect-Price">{this.state.cost/100} zł</h2>
            <p className="Inspect-Desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis diam nec risus consequat venenatis. Nam nec laoreet urna. Pellentesque faucibus leo et dignissim gravida. Donec vitae elit bibendum, luctus nisl id, lacinia justo. Fusce ligula nisi, interdum sit amet tellus non, condimentum ornare nunc. Aenean tempor elit vitae tortor ultricies, vitae mattis lacus fringilla. Sed volutpat elit urna, a tristique mi aliquam cursus. Nam ipsum sem, pellentesque nec laoreet non, dictum sed massa. Vivamus dolor enim, aliquet nec maximus fermentum, sagittis nec massa. Maecenas quis ultrices magna. Cras augue nisi, vehicula et ornare quis, porta sed tortor. Proin porta convallis justo at feugiat. Morbi pulvinar diam porttitor turpis sodales, id bibendum ex finibus. Nullam semper et mi nec egestas. Donec fringilla ligula et justo placerat lacinia.</p>
            <label for="TOnBack">Logo na plecach:</label>
            <select id="TOnBack" >
  <option value="has T">Tak</option>
  <option value="No T">Nie</option>
</select>
<label for="Size">Rozmiar:</label>
            <select id="Size" >
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
  <option value="XXL">XXL</option>
</select>
            <button className="Add-To-Cart" onClick={this.AddToCart}>Dodaj do koszyka</button>
            <span id="Shop"/>
        </div>
            </div>
        
        )
    }
}
export default InspectedElement