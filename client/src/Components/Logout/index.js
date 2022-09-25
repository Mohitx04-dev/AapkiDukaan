import React from 'react'

function Logout(props) {
    if(localStorage.getItem(props.Role)) {
        localStorage.removeItem(props.Role)
        alert('Logged Out')
        window.location.href = '/'
    }
    return (
        <div>
            Logging Out...
        </div>
    )
}

export default Logout
