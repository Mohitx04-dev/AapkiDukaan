
import React from 'react'

function ProgressDiv(props) {
    return (
        <div>
            <div className='h-1 w-full bg-gray-300'>
            <div
                style={{ width: `${props.perc}%`}}
                className={`h-full ${'bg-theme'} p-2`}>
            </div>
        </div>
        </div>
    )
}

export default ProgressDiv
