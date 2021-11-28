import React from 'react'

function UserProfile({setProfileDropdownState} ) {


    return (

        // <div className="outer-div-popups" onClick={setProfileDropdownState(false)}>
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
    // </div>
    )
}

export default UserProfile
