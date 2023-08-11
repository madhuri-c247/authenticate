import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';

const TabLayout = () => {
    const [currentTab, setCurrentTab] = React.useState(0);
    const location = useLocation()
    console.log(location.pathname);
    const navigate = useNavigate()
    useEffect(() => {
        if (currentTab == 0) {
            navigate('/home/about')
        }
    }, [])
    console.log(currentTab)

    const handleChange = (event, newValue) => {
        console.log('handleChangehandleChange');
        setCurrentTab(newValue);
        console.log(newValue)
        if (newValue == 0) {
            navigate('/home/about')
        } else if (newValue == 1) {
            navigate('/home/education')
        }
        else if (newValue == 2) {
            navigate('/home/hobbies')
        }
    };

    return (
        <div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={currentTab} onChange={handleChange} centered>
                    <Tab label="About" />
                    <Tab label="Education" />
                    <Tab label="Hobbies" />
                </Tabs>
            </Box>
        </div>
    );
}

export default TabLayout;
