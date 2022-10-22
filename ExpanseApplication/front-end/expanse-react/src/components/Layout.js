import React from 'react';

const Layout = ({children}) => {


  return (
    <div>
      <h1>Hallo Ziya</h1>
        <div style={{
        marginLeft: '80px',
        marginRight: '10px',
        marginTop: '30px'
        }}>
        {children}
        </div>
    </div>
  )
}

export default Layout

