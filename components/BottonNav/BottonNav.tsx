import React from 'react'
import { ActiveLink } from '../ActiveLink/ActiveLink';

const navItems = [
  {
    path: '/home',
    text: 'Home'
  },
  {
    path: '/categories',
    text: 'Categories'
  },
  {
    path: '/departments',
    text: 'Departments'
  }
];

export const BottonNav = () => {
  return (
    <div className="flex bg-primary bg-opacity-30 py-1 px-2">
      {navItems.map(navItem=> (
        <ActiveLink key={navItem.path} { ...navItem } />
      ))}
    </div>
  )
}
