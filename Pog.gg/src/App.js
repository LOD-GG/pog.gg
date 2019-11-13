import React, {Component} from 'react';
import './App.css';
import Banner from './Banner.js';
import {Post} from './components/Post';
import CommunityBest from './././components/CommunityBest/CommunityBest.js';
import { Signup } from './components/Signup';
import {Route} from 'react-router-dom';
import { Signin } from './components/Signin';
import { Editor } from './components/Editor';
import { PostInfo } from './components/PostInfo';

class App extends Component {
  render(){
    return(
      <>
        <Route exact path="/" component={Banner}/>
        <Route exact path="/post" component={Post}/>
        <Route exact path="/" component={CommunityBest}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/editor" component={Editor}/>
        <Route exact path="/PostInfo" component={PostInfo}/>
      </>
    );
  }
}

export default App;
