import React from 'react';
import{
    Router,
    Route,

} from 'react-router-dom';
import Form from './Form';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import One from './CustomRotues';




import createBrowserHistory from 'history/createBrowserHistory';
const customHistory=createBrowserHistory();
const CustomRoutes =() =>(

    <Router history={customHistory}>
        <div>
           
           <Navbar/>
           <Route exact path="/" component={Form}/>
           <Route path="/about" component={About}/>
           <Route path="/contact/:rollNumber" component={Contact}/>
        </div>
   
    </Router>
)

export default CustomRoutes;