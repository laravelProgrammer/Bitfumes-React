import React,{Component} from 'react';


class Operator extends Component{
    

    CustomCss={
        color:'white',
        textAlign:'center',
        backgroundColor:'black',
        padding:'20px'

    }
      render(){
          return(
              <div>
                  <h1 style={this.CustomCss}>Coutner App</h1>
                  <center>

                      <button type="button" onClick={this.props.increment}>Plus +</button>
                      {/* {
                          (this.props.counters==0)?
                          (<h6>Value Reched to 0</h6>):
                          
                          (<h6>{this.props.counters}</h6>)
                      } */}

                         <h5>{this.props.Message} {this.props.counters} </h5>
                     
                       
                      <button type="button" onClick={this.props.decrement}>Minus -</button>

                  </center>
              </div>
          )
      }
}

export default Operator;