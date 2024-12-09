import Link from 'next/link'
import React from 'react'

const navItems = [
  {
    path: '/home?token=x',
    label: 'Home'
  },
  {
    path: '/categories?token=x',
    label: 'Categories'
  },
  {
    path: '/departments?token=x',
    label: 'Departments'
  }
];

export const BottonNav = () => {
  return (
    <div className="flex bg-primary bg-opacity-30 py-1 px-2">
      {
        navItems.map(({ path, label})=> (
          <Link className="mr-10" href={path} key={path}>{label}</Link>
        ))
      }
    </div>
  )
}
