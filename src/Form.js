import React ,{Component} from 'react';
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
           username:'',
           allUsers:[],
           radioGroup:{
               PhpDevloper:false,
               LaravelDeveloper:true,
               ReactDevloper:false
           },
           checkboxGroup:{
               react:true,
               php:true,
               laravel:true
           },
           selectedValue:'Python'
        }
        this.FormListener=this.FormListener.bind(this);
        this.buttonClickHandler=this.buttonClickHandler.bind(this);
        this.RadioHandler=this.RadioHandler.bind(this);
        this.CheckBoxHandler=this.CheckBoxHandler.bind(this);
        this.SelectHandler=this.SelectHandler.bind(this);
    }

    SelectHandler(event){
        this.setState({
            selectedValue:event.target.value
        });
    }

    FormListener(event){

        this.setState({
            
            username:event.target.value,
            
        })

    }

    buttonClickHandler(event){
       
        let user=this.state.allUsers;
        this.state.allUsers.push(this.state.username);
        this.setState({
            allUsers:user,
            username:''
        })
    }


    RadioHandler(event){
        let radioGroup=this.state.radioGroup;

       for(var key in radioGroup){

          radioGroup[key]=false;
       }

       radioGroup[event.target.value]=true;

       this.setState({
           radioGroup:radioGroup
       });
    }


    CheckBoxHandler(event){
        console.log(event.target.value);

        let checks=this.state.checkboxGroup;
        checks[event.target.value]=event.target.checked;
        this.setState({
            checkboxGroup:checks
        });
    }


    render(){
        return(
           
            <div>
                 <br/>
                 <br/>
                    <center>
                    <label>User Name</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.FormListener}/>
                    <p>{this.state.username}</p>
                    <button  onClick={this.buttonClickHandler}>Add New</button>
                    <h2>{this.state.allUsers}</h2>
                    <br/>
                    </center>
                    <center>
                        <h3>Radio Buttons</h3>
                   

                    <label>Php Developer : 
                        <input type="radio" name="dev" value="PhpDeveloper" 
                        checked={this.state.radioGroup['PhpDeveloper']} onChange={this.RadioHandler}/>
                    </label><br/>

                    <label>Laravel Developer : 
                        <input type="radio" name="dev" value="LaravelDeveloper" 
                        checked={this.state.radioGroup['LaravelDeveloper']} onChange={this.RadioHandler}/>
                    </label><br/>

                    <label>React Developer : 
                        <input type="radio" name="dev" value="ReactDeveloper" 
                        checked={this.state.radioGroup['ReactDeveloper']} onChange={this.RadioHandler}/>
                    </label><br/>


                    <h3>Check Box Buttons</h3>
                   

                    <label>Php Developer : 
                        <input type="checkbox" name="dev" value="php" 
                        checked={this.state.checkboxGroup['php']} onChange={this.CheckBoxHandler}/>
                    </label><br/>

                    <label>Laravel Developer : 
                        <input type="checkbox" name="dev" value="laravel" 
                        checked={this.state.checkboxGroup['laravel']} onChange={this.CheckBoxHandler}/>
                    </label><br/>

                    <label>React Developer : 
                        <input type="checkbox" name="dev" value="react" 
                        checked={this.state.checkboxGroup['react']} onChange={this.CheckBoxHandler}/>
                    </label><br/>
                    
                    </center>

                    <center>
                        <select value={this.state.selectedValue} onChange={this.SelectHandler}>
                            <option value="Python">Python</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Laravel">Laravel</option>
                        </select>
                    </center>
                
            </div>
        )
    }
}

export default Form;