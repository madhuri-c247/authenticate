import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Education from './components/Education';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth';
import Signup from './components/Signup';
import Error from './components/Error';
import ResponsiveDialog from './components/dialog';
import MyProfile from './components/MyProfile';
import { createContext, useState } from 'react';

export const myContext = createContext();
function App() {


  const [loginUser, setLoginUser] = useState([])
  
  return (
    <myContext.Provider value={{loginUser, setLoginUser}}>

    <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Auth><Home/></Auth>}/>
      <Route exact path='/home' element= {<Home/>}>
            <Route exact path='/home/dialog' element={<ResponsiveDialog/>}/>
            <Route exact path='/home/about' element={<About/>}/>
            <Route exact path='/home/education' element={<Education/>}/>
            <Route exact path='/home/hobbies' element={<Hobbies/>}/>
      </Route>
      <Route exact path='/myprofile' element={<MyProfile/>}/> 
       <Route exact path='/login' element={<Login/>}/>
       <Route exact path='/signup' element={<Signup/>}/>
       <Route exact path='*' element={<Error/>}/>     
    </Routes>
    </BrowserRouter>
    </myContext.Provider>
  );
}

export default App;
