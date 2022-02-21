
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Contact from './component/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
  <Router>  
<Navbar title="Home" about="About Us"  />
{/* <Alert alert="this is alert"/> */}

<div className='container'>
<Switch>
<Route path="/cont">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading="Write and analyse your text"/>
          </Route>
          
        </Switch>
        </div>
        </Router>







    </>
    
  );
}

export default App;
