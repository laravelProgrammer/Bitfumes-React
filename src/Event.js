import React,{Component} from 'react';
import Operator from './CounterApp';


class Event extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
     this.incrementHandler=this.incrementHandler.bind(this);
     this.decrementHandler=this.decrementHandler.bind(this);
    }

   incrementHandler(){
       if(this.state.counter >= 10){
          
        this.setState({
            message:'value becomes to ',
            
         });

       }
       else{

        this.setState({
            counter:this.state.counter+1,
            message:''
         });

       }
     
   }

   decrementHandler(){
       if(this.state.counter === 0){
        this.setState({
            message:'value becoms to'
        });
       
       }
       else{
          
        this.setState({
            counter:this.state.counter-1,
            message:''
        });

       }
       
   }

    render(){
        return(

            <div>

               <Operator counters={this.state.counter} increment={this.incrementHandler}
                decrement={this.decrementHandler} Message={this.state.message}/>
               
            </div>
        )
    }

}

export default Event;