import React ,{Component} from 'react';
import {
    Link
}from 'react-router-dom';
class About extends Component{
    Home(){
        console.log('operation');
        this.props.history.push('/');
    }
    Contact(){
        console.log('operation');
        this.props.history.push('/contact/123');
    }
    
    render(){
        return(
            <div>
                <center>
                    <h1>About Us Page</h1>
                    <h1>About Us Page</h1>
                    <h1>About Us Page</h1>
                    <h1>About Us Page</h1>
                    <button onClick={this.Home.bind(this)}>Home</button>
                    <button onClick={this.Contact.bind(this)}>Contact</button>
                    
                </center>
                <ul>
                    <li>
                    <Link to="/" style={this.CustomCss}>Home</Link>
                
                    </li>
                    <li>
                        <Link to="/about" style={this.CustomCss}>About</Link>
                   </li>
                   <li>
                     <Link to="/contact/123" style={this.CustomCss}>Contact</Link>
                   </li>

                   <li>
                   <Link to="/contact/12345" style={this.CustomCss}>Contact</Link>
                
                   </li>

                   <li>
                  
                    <Link to="/contact/1234567" style={this.CustomCss}>Contact</Link>
                   </li>

                </ul>
            </div>
        )
    }
}

export default About;