import React from 'react'

function UserProfile() {
    return (
        <div className="profile-dropdown-condainer">
        <div className="profile-list-items-container">
            <div className="profile-list-item">
                <p className="p-tag">Dashboard</p>
                <div className="line-break-user"> </div>
            </div>
        </div>
        <div className="profile-list-items-container">
            <div className="profile-list-item">
                <p className="p-tag">Profile</p>
                <div className="line-break-user"> </div>
            </div>
        </div>
        <div className="profile-list-items-container">
            <div className="profile-list-item">
                <p className="p-tag">Logout</p>
                <div className="line-break-user"> </div>
            </div>
        </div>
    </div>
    )
}

export default UserProfile
