import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Education from './components/Education';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
     <Routes>
       <Route exact path='/' element={<Login/>}/>
       <Route exact path='/home' element={<Home/>}>
        <Route exact path='/home/about' element={<About/>}/>
        <Route exact path='/home/education' element={<Education/>}/>
        <Route exact path='/home/hobbies' element={<Hobbies/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
