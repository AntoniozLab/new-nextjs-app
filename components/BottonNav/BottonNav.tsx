import Link from 'next/link'
import React from 'react'

export const BottonNav = () => {
  return (
    <div className="flex bg-primary bg-opacity-30 py-1 px-2">

      <Link className="mr-2" href="/home?token=x">Home</Link>
      <Link className="mr-2" href="/categories?token=x">Categories</Link>
      <a className="mr-2" href="/departments?token=x">Departments</a>
    </div>
  )
}
