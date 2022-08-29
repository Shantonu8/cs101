import React from 'react'
import {Header} from './'
import {Jumbotron} from './'

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    {children}
    
    </>
  )
}

export default Layout