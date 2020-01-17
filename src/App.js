import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
   return (
    <div>
      <Link to="/">Home page</Link>
      <button onClick={() => props.history.push("/")}>
        Topics
      </button>
      <Link to={`${props.match.url}/12`}>To the hat</Link>
      <h1>Hats page</h1>
    </div>
   )
}  

const HatsDetail = props => {
  console.log(props.match.params.hatsid)
  return (
    <div>
      {props.match.hatsid}
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        <Route path='/hats/:hatsid' component={HatsDetail}/>
      </Switch>
    </div>
  );
}

export default App;
