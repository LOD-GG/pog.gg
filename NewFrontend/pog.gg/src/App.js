import React from 'react';
import Index from './Page/index';
import Community from './Page/community';
import Summoner from './Page/Summoner';
import Editor from './Page/editor';
import TeamPost from './Page/teamPost';
import Login from './Page/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Index}/>
        <Route path="/community" component={Community}/>
        <Route path="/summoner" component={Summoner}/>
        <Route path="/editor" component={Editor}/>
        <Route path="/teamPost" component={TeamPost}/>
        <Route path="/login" component={Login}/>
      </Router>
    </>
  );
}

export default App;
