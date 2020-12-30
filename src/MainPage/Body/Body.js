import React from 'react';
import './Body.css'
import ClothesList from '../ClothesList/ClothesList/ClothesList';

class ContentBody extends React.Component{
   
   constructor(props){
     super(props);
   }
   state = {
      currentRender : window.$renderobj
   }

render(){
    
return(
   
<div className = "Content-body" ref={this.ref}>
<ClothesList></ClothesList>
</div>);
}

}
export default ContentBody
