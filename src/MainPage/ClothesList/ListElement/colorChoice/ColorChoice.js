import React from 'react';
import './ColorChoice.css';

class ColorPicker extends React.Component{
state={
    colors: ['red','blue','green'],
    focusedID: 0
}

unfocus(){
    document.getElementById("focused").setAttribute("id",this.state.focusedID);
}
 
setColor (colors,buttonToFocusId){
    this.props.colorSet(colors)
    this.unfocus(buttonToFocusId)
    this.setState({focusedID:buttonToFocusId});
    document.getElementById(buttonToFocusId.toString()).setAttribute("id","focused")
    console.log(colors)
}

componentDidMount(){
    this.setState({
        //TODO: change this array into object where colors have polish names
        colors : ['Black','White','Red','Blue','Green','Coral','Wheat']
    });
    document.getElementById(this.state.focusedID.toString()).setAttribute("id","focused");

}
    render(){
        return(
            <div className="Color-choice"> 
             {  this.state.colors.map((currElemenent,index)=>(<button className= "Color" id={index} 
             onClick = {() => this.setColor(currElemenent,index)}
                style = {{backgroundColor: currElemenent}}
                />
               ))}
            </div>
        )
    }
}
export default ColorPicker;