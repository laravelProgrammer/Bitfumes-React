import React ,{Component} from 'react';

class Contact extends Component{
    render(){
        let users={
            123:{
                name:'Hamza',
                Age:12
            },
            12345:{
                name:'Saif',
                Age:122
            },
            1234567:{
                name:'Asad',
                Age:1222
            },
        }
        let RequiredUser=users[this.props.match.params.rollNumber];
        return(
            <div>
                <center>
                    <h1>Contact Us Page</h1>
                    <h1>Contact Us Page</h1>
                    <h1>Contact Us Page</h1>
                    <h1>Contact Us Page</h1>
                    <h1>{RequiredUser.name}</h1>
                    <h1>{RequiredUser.Age}</h1>
                </center>
            </div>
        )
    }
}

export default Contact;