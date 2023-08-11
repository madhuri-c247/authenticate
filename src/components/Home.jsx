
import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Header from './Corousel';
import TabLayout from './TabLayout';

const Home = () => {
    
    const navigate = useNavigate()
     
    const logout = ()=>{
        navigate('/')
    }

    return (
        <div>
            <button onClick={logout}><ExitToAppIcon /></button>
            <Header />
            <TabLayout/>
            <Outlet />
        </div>
    );
}

export default Home;
