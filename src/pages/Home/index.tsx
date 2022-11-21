import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'

export function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold">
        Welcome to this library app
      </h1>
      <h2 className="text-2l font-bold">
        Now you can go to check these Books' APIs
      </h2>
      <div className='flex-row p-5'>
        <Link to="/google" className='mt-5'>
          <Button text='Google API' />
        </Link>
        <Link to="/moviedb" className='mt-5'>
          <Button text='MovieDB' />
        </Link>
      </div>
    </>
  )
}
