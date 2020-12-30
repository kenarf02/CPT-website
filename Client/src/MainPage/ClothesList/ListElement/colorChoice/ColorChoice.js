import React from 'react';
import './ColorChoice.css';
class ColorPicker extends React.Component{
state={
    colors: ['red','blue','green']
}

setColor (colors,buttonToFocus){
    this.props.colorSet(colors)

    console.log(colors)
}
componentDidMount(){
    this.setState({
        colors : ['black','white','red','blue','green','coral','wheat']
    });
    document.getElementById('0').focus();

}
    render(){
        return(
            <div className="Color-choice">
             {  this.state.colors.map((currElemenent,index)=>(<button className= "Color" id={index} 
             onClick = {() => this.setColor(currElemenent)}
                style = {{backgroundColor: currElemenent}}
                />
               ))}
            </div>
        )
    }
}
export default ColorPicker;