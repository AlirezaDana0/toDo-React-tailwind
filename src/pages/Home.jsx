import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Link to="./Countries" className='p-2 bg-green-300 rounded-lg my-2'> Countries </Link>
        
    </div>
  )
}
