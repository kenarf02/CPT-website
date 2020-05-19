import Cart from './Cart'
class CartPage extends React.Component{

    render(){
        <div className="Storage">
      {this.state.Clothes ? (<div className="row">
                <div className="Wrap-List"> {Cart.List.map(List=>(<ListElement
                    name = {List.name}
                    cost = {List.Cost}
                    url = {List.url}
                    size = {List.size}
                    
               />
               ))}</div>
              
               
                
        </div>
    ):(<h1>Ładowanie Produktów...</h1>)
}
        
             </div>
    }
}