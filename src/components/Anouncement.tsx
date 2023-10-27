"use client"
import { X } from 'lucide-react'
import React, { useState } from 'react'

const Anouncement = () => {
    const [anouncementOpen, setAnouncementOpen] = useState(true)
  return (
    <>
    {anouncementOpen ?
    <div className=" bg-gradient-to-tr from-blue-500 relative shadow-xl border-2 border-blue-300 to-cyan-600 w-full h-auto py-3 px-4 max-w-2xl rounded-xl flex flex-col">
          <h2 className=" text-blue-50 text-2xl font-bold">
            In the development phase
          </h2>
          <p className="text-sm text-blue-200">
            This app is still being developed. The current version is v0.8
          </p>
          <p className="text-sm text-blue-200">
            Thank you for trying this app.
          </p>
          <div onClick={() => setAnouncementOpen(false)} className='absolute top-3 right-6  rounded hover:bg-blue-950/10 hover:cursor-pointer'><X color='white'></X></div>
        </div>
    : null}
    </>
  )
}

export default Anouncement