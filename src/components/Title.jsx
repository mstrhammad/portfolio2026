import React from 'react'

const Title = ({ children }) => {
    return (
        <h2 className="text-3xl font-bold relative inline-block after:block after:bg-primary after:h-1 after:w-16 after:mt-2">
            {children}
        </h2>
    )
}

export default Title
