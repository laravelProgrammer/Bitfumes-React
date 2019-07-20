import React ,{Component} from 'react';
import{
    Router,
    Route,

} from 'react-router-dom';
import Form from './Form';
import Contact from './Contact';
import About from './About';
class One extends Component{
    Home(){
        console.log('operation');
        this.props.history.push('/');
    }
    Contact(){
        console.log('operation');
        this.props.history.push('/contact');
    }
    render(){
        return(
            <div>
                
                   
                    <button onClick={this.Home.bind(this)}>Home</button>
                    <button onClick={this.Contact.bind(this)}>Contact</button>
                    
                
            </div>
        )
    }
}

export default One;