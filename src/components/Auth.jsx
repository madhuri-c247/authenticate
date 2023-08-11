import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = (props) => {
    const navigate = useNavigate()
    //  localStorage.setItem('data', 'madhuri')
    useEffect(() => {
        if (!localStorage.getItem('data')) {
            navigate('/login')
            console.log('not authenticate')
        }
    })

    return (
        <div>
            {props.children}
        </div>
    );
}

export default Auth;
