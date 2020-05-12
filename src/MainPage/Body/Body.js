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
   
   renderShopBody(){
      if(this.state.currentRender != window.$renderobj){
      this.setState({
         currentRender:window.$renderobj
      })
   }
      this.renderobj = this.state.currentRender;
   return this.renderobj;
   }
   
   componentDidUpdate(){
      this.renderShopBody();
   }
render(){
    
return(
   
<div className = "Content-body" ref={this.ref}>
{this.renderShopBody()}
</div>);
}

}
export default ContentBody
