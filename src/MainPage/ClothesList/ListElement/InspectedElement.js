import React from 'react';
import './InspectedElement.css'
import ClothesList from '../ClothesList/ClothesList';
import ReactDOM from 'react-dom';
import App from '../../../App';

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

    GetBack(){
        window.$renderobj = (<ClothesList></ClothesList>);
        ReactDOM.render(<App></App>,document.getElementById('root'))
    }

    render(){
        return(
            <div className ="InspectedElement">
                
<div className="Storage">
            <button className="GetBack" onClick={this.GetBack}>GO BACK TODO:Change to cross</button>
            <h1>{this.props.name}</h1>
            <h2 className="Inspect-Price">{this.props.cost} zł</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis diam nec risus consequat venenatis. Nam nec laoreet urna. Pellentesque faucibus leo et dignissim gravida. Donec vitae elit bibendum, luctus nisl id, lacinia justo. Fusce ligula nisi, interdum sit amet tellus non, condimentum ornare nunc. Aenean tempor elit vitae tortor ultricies, vitae mattis lacus fringilla. Sed volutpat elit urna, a tristique mi aliquam cursus. Nam ipsum sem, pellentesque nec laoreet non, dictum sed massa. Vivamus dolor enim, aliquet nec maximus fermentum, sagittis nec massa. Maecenas quis ultrices magna. Cras augue nisi, vehicula et ornare quis, porta sed tortor. Proin porta convallis justo at feugiat. Morbi pulvinar diam porttitor turpis sodales, id bibendum ex finibus. Nullam semper et mi nec egestas. Donec fringilla ligula et justo placerat lacinia.</p>
            <button className="Add-To-Cart">Dodaj do koszyka</button>
            <span id="Shop"/>
        </div>
        <img src ={this.props.url} className="Inspect-Img"></img>
            </div>
        
        )
    }
}
export default InspectedElement