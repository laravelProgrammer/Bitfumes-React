import React ,{Component} from 'react';


class Method extends Component{
       MyFacebookId(){
           return this.fblink=this.props.link;
           // return 'https://www.facebook.com/'
       }
       Myname(){
           return this.name=this.props.name;
           // return 'Hamza Altaf'
       }
    render()
    {
        return(
            <div>
                <h1>{this.MyFacebookId()}</h1>
                <h2>{this.Myname()}</h2>
            </div>
        )
    }
}

export default Method;