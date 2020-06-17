import React from 'react';
import ListElement from '../ListElement/ListElement';
import './ClothesList.css'
import Header from '../../Header/Header';

class ClothesList extends React.Component{

    state={
Clothes:null
};
 clothesList =[
    {Name: 'Lorem Ipsum', Cost:15000, Url:'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png'},
    {Name: 'Lorem Ipsum 2', Cost:11000, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
    {Name: 'Lorem Ipsum 3 ', Cost:20000, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 4 ', Cost:20000, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 5 ', Cost:30000, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 6 ', Cost:27000, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 7 ', Cost:20000, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 7 ', Cost:200, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'}
];
componentDidMount(){
    this.setState({
       Clothes:this.clothesList
    });
}
    render(){
    return(
        <div>
            {this.state.Clothes ? (<div className="row">
                <div className="Wrap-List"> {this.state.Clothes.map(Clothes=>(<ListElement
                    name = {Clothes.Name}
                    cost = {Clothes.Cost}
                    url = {Clothes.Url}
                    
               />
               ))}</div>
              
               
                
        </div>
    ):(<h1>Ładowanie Produktów...</h1>)
}<span id="Shop"/>
         </div>
         );
    }
};

export default ClothesList;
