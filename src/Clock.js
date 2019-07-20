import React,{Component} from 'react';

class Clock extends Component{
    constructor(props){
        
        super(props);
        this.state={
            Clocktime:new Date().toLocaleString(),
            count:0
        }
        this.updateState();
        
    }

    

    
    

    // Update State Method

    updateState(){
         
        setInterval(()=>{
            
            this.setState({
                Clocktime:new Date().toLocaleString(),
                count:this.state.count+1,
                

            })
        },1000)
    }
    render(){
       
        return(
          
            <div>
                   {
                      (this.state.count <10)?
                      
                        (<h1>{this.state.Clocktime}</h1>):

                        (<h1>{'Component Remove'}</h1>)
                   }
            </div>
        )
    }
}

export default Clock;