import React from 'react'

const Layout = ( { children }) => {
    return (
        <div style={{ margin: `0 auto`, maxWidth: 900, padding: `0 1rem` }}>
            {children}
        </div>
    )
}

export default Layout
