import React from 'react';
import './ListElement.css'
class ListElement extends React.Component{

    state={
name:'',
Cost:0,
url :''
};

componentDidMount(){
    const {name,cost,url} = this.props;
    this.setState({
        name,
        cost,
        url
    });
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
        </div>
    );

};
}
export default ListElement;
