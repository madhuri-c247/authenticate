
import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Header from './Corousel';
import TabLayout from './TabLayout';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Profile from './profile';

const Home = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const data = location.state 

    const [user, setUser] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseAgree = () => {
        setOpen(false);
        localStorage.removeItem('token')
        navigate('/login')
    };

    const handleClose = () => {
        setOpen(false);

    };

    useEffect(()=>{
    //   console.log(data, 'dataa')
    //   const token = JSON.parse(localStorage.getItem('token'))
    //   setUser(token)


    },[])

    return (
        <div>
            <div className='navbar-home m-1 p-2'>
            <Profile />
            <Button variant="contained" onClick={handleClickOpen}>
                LogOut
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Do you want to LOGOUT?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If You LogOut,
                        You Will Loss All Your Data!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleCloseAgree} autoFocus>
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
            <Header />
            <TabLayout />
            <Outlet/>
        </div>
    );
}

export default Home;
