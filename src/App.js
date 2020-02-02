import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      curruentUser:null
    }
  }

  unsubscribedFromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.unsubscribedFromAuth = this.setState({curruentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribedFromAuth();
  }

  render (){
    return (
      <div>
        <Header curruentUser={this.state.curruentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );

  }
}

export default App;
