import React from 'react';
import './InspectedElement.css'

class InspectedElement extends React.Component{
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
        return(
        <div className="Storage">
            <h1>{this.props.name}</h1>
            <h2>{this.cost}</h2>
            <img src ={this.url}></img>
            <span id="Shop"/>
        </div>
        )
    }
}
export default InspectedElement