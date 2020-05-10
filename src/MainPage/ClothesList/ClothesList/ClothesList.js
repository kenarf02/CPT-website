import React from 'react';
import ListElement from '../ListElement/ListElement';
import './ClothesList.css'

class ClothesList extends React.Component{

    state={
Clothes:null
};
 clothesList =[
    {Name: 'Lorem Ipsum', Cost:150, Url:'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png'},
    {Name: 'Lorem Ipsum 2', Cost:110, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
    {Name: 'Lorem Ipsum 3 ', Cost:200, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 4 ', Cost:200, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 5 ', Cost:300, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 6 ', Cost:270, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
   { Name: 'Lorem Ipsum 7 ', Cost:200, Url:'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png'},
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
               {this.state.Clothes.map(Clothes=>(<ListElement
                    name = {Clothes.Name}
                    cost = {Clothes.Cost}
                    url = {Clothes.Url}
               />
               ))}
               
                
        </div>
    ):(<h1>Ładowanie Produktów...</h1>)
}<span id="Shop"/>
         </div>
         );
    }
};

export default ClothesList;
