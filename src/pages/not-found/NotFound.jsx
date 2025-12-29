import React from 'react'
import { NavLink } from 'react-router'

const NotFound = () => {
  return (
    <div className='p-5'>
        <h1 className='text-yellow-600'>Not Found 404</h1>
        <NavLink to={"/"} className={'underline'}>Please go back</NavLink>
    </div>
  )
}

export default NotFound
