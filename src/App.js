import React, {Component} from 'react';



class Helloworld extends Component{
     customStyle={
        backgroundColor:'gray',
        color:'white',
        padding:'10px',
        display:'block'
     }
     render(){
        return(
           <a href={this.props.link} style={this.customStyle}>{this.props.linkText}</a>
        )
     }
}

export default Helloworld;
