import React from 'react'

function ExeLogout() {
    if(localStorage.getItem('User')) {
        localStorage.removeItem('User')
        alert('Logged Out')
        window.location.assign('/admin')
    }
    return (
        <div>
            Logging Out...
        </div>
    )
}

export default ExeLogout