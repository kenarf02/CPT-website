import React from 'react';
import './Body.css'
import ClothesList from '../ClothesList/ClothesList/ClothesList';
class ContentBody extends React.Component{
render(){
return(
<div className = "Content-body">
<ClothesList></ClothesList>

</div>);
}

}
export default ContentBody