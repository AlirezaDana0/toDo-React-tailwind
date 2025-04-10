import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="./Countries"></NavLink>
            </li>
        </ul>
    </div>
  )
}
