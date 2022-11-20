import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from './Header';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import View from '../pages/View';
import LocationPage from '../pages/Location';
import PostPage from '../pages/Post';
import SignUp from '../pages/Signup';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/location" element={<LocationPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/view" element={<View/>}/>
      <Route path="/post" element={<PostPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Routes>

    </Router>
  )
}

export default App;
