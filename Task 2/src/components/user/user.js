import React from "react";
import './user.style.css';

const User = ({ userData }) => {
    return (
        <div className="user-container">
            <img className="user-avatar" src={userData.avatar} alt="avatar" />
            <h2>{userData.first_name} {userData.last_name}</h2>
            <p>{userData.email}</p>
        </div>
    )
};

export default User;

