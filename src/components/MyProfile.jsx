import React, { useEffect, useState } from 'react';

const MyProfile = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        const token  = localStorage.getItem('token')
        setUser(token);

    })
    return (
        <div>
            my profile
        </div>
    );
}

export default MyProfile;
