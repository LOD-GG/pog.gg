import React from 'react';
import Community from './pages/community';
import Index from './pages/index';
import Editor from './pages/Editor';
import Highlights from './pages/highlights';
import TeamPost from './pages/teamPost';
import Login from './pages/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>  
      <Router>
        <Route exact path="/" component={Index}/>
        <Route path="/community" component={Community}/>
        <Route path="/editor" component={Editor}/>
        <Route path="/highlights" component={Highlights}/>
        <Route path="/login" component={Login}/>
        <Route path="/teamPost" component={TeamPost}/>
      </Router>
    </>
  );
}

export default App;
