import React from 'react';



import{
    
    Link
} from 'react-router-dom';

class Navbar extends React.Component{
   CustomCss={
       backgroundColor:'black',
       color:'white',
       textDecoration:'none',
       padding:'10px',
       marginTop:'20px'
   }
   render(){
       return(
        <div>
          <center>

                <br/>
                <Link to="/" style={this.CustomCss}>Home</Link>
                <Link to="/about" style={this.CustomCss}>About</Link>
                <Link to="/contact/123" style={this.CustomCss}>Contact</Link>
               

        </center>
       
       </div>
       )
   }
    
       
   
    
}

export default Navbar;