import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import React,{useState} from 'react'

import { BrowserRouter as Router,Route,Switch} 
        from "react-router-dom";

const App = () => {
   const[progress,setprogress]=useState(0);
   
  const SetProgress=(progress)=>{
    setprogress(progress);
  }
    return (
      <div>
        <Router>
        <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Navbar></Navbar>
        </div>
        <Switch>
          <Route exact path="/"><News SetProgress={SetProgress} key="about" pageSize="9" category="general" country="in"/></Route>
          <Route exact path="/business"><News SetProgress={SetProgress} key="business" pageSize="9" category="business" country="in"/></Route>
          <Route exact path="/entertainment"><News SetProgress={SetProgress} key="entertainment" pageSize="9" category="entertainment" country="in"/></Route>
          <Route exact path="/general"><News SetProgress={SetProgress} key="general" pageSize="9" category="general" country="in"/></Route>
          <Route exact path="/health"><News SetProgress={SetProgress} key="health" pageSize="9" category="health" country="in"/></Route>
          <Route exact path="/science"><News SetProgress={SetProgress} key="science" pageSize="9" category="science" country="in"/></Route>
          <Route exact path="/sports"><News SetProgress={SetProgress} key="sports" pageSize="9" category="sports" country="in"/></Route>
          <Route exact path="/technology"><News SetProgress={SetProgress} key="technology" pageSize="9" category="technology" country="in"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
  export default App

