import React from 'react'
import Home from './components/Home'
import MainSignIn from './components/MainSignIn'
import SignInPage1 from './components/SignInPage-1'
import SignInPage2 from './components/SignInPage-2'
import SignInPage3 from './components/SignInPage-3'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';

function App() {
  return (   
      <Router>
         <Routes>
          <Route exact path="/" element={ <Home /> } />
         </Routes>
         <Routes>
          <Route exact path="/MainSignIn" element={ <MainSignIn /> } />
         </Routes>
         <Routes>
          <Route path="/SignInPage1" element={ <SignInPage1 /> } />
         </Routes>
         <Routes>
          <Route path="/SignInPage2" element={ <SignInPage2 /> } />
         </Routes>
         <Routes>
          <Route path="/SignInPage3" element={ <SignInPage3 /> } />
         </Routes>
         <Routes>
          <Route path="/HomePage" element={ <HomePage /> } />
         </Routes>

        </Router> 
  );
}

export default App;
