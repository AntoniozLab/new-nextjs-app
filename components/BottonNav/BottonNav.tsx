import React from 'react'

export const BottonNav = () => {
  return (
    <div className="flex bg-primary bg-opacity-30 py-1 px-2">
      <a className="mr-2" href="/?token=x">Home</a>
      <a className="mr-2" href="/categories?token=x">Categories</a>
      <a className="mr-2" href="/departments?token=x">Departments</a>
    </div>
  )
}
