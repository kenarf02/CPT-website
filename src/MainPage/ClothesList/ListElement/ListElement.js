import React from 'react';
import './ListElement.css'
import InspectedElement from './InspectedElement';
import App from '../../../App';
import ReactDOM from'react-dom';

class ListElement extends React.Component{

    state={
name:'',
Cost:0,
url :'',
isHidden:true
};

componentDidMount(){
    const {name,cost,url} = this.props;
    this.setState({
        name,
        cost,
        url
    });
}
CreatePopUp =() =>{
    window.$renderobj = <InspectedElement
    name={this.props.name}></InspectedElement>;
    ReactDOM.render(<App></App>,document.getElementById('root'))
    document.getElementById("");
}
    render(){
        const name = this.props.name;
        const price = this.props.cost;
        const url = this.props.url;
    return(
        <div className="List-element">
     
            <div className="Information">
                <img src= {url} className="Image"></img>
                    <h1 className="Product-name">{name}</h1>
                    <h2 className="Product-price">{price} zł</h2>            
            </div>
            <div className="Card-Back">
            <h1 className="Product-name-back">{name}</h1>
            <h2 className="Product-price-back">{price} zł</h2>  
            <p className ="Product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis est ut risus gravida convallis nec eu eros. Fusce non mauris nec lectus volutpat venenatis. Aliquam erat volutpat. Vestibulum eleifend ante eu augue blandit, sit amet porta mauris fringilla. </p>
<button className = "Add-to-Cart" onClick={this.CreatePopUp}>Zobacz więcej</button>

            </div>
        </div>
    );

};
}
export default ListElement;
