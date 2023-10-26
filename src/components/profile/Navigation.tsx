"use client"
import { AppWindow, Settings, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Archive from './Archive';
import AppSettings from './AppSettings';
import Account from './Account';
import { cn } from '@/lib/utils';

const Navigation = ({user, context}) => {
    const router = useRouter()

    const [activeSection, setActiveSection] = useState("")
  
    const id = context.params.id;
    const section = context.searchParams.s
  
    useEffect(() => {
      setActiveSection(section)
    }, [context])
  
    const updateSearchParams = (param: string) => {
      router.push(`?s=${param}`)
    }
  return (
    <div className="w-full h-auto flex  justify-center  mt-24">
    <div className="w-full max-w-7xl  flex justify-between">
    <div className="w-1/3 h-[400px] ">
  <ul className="w-full h-full flex flex-col">
    <li onClick={() => updateSearchParams("archive")} className={cn({
        "w-full h-14 hover:bg-blue-950/5 flex items-center px-12 gap-6  border-b-zinc-900/10  hover:cursor-pointer": true,
        "bg-blue-950/5": activeSection === "archive"
    })}>
      <User strokeWidth={1}></User> <p className="text-blue-950 text-sm">Archive</p>
    </li>
    <li onClick={() => updateSearchParams("account")} className={cn({
        "w-full h-14 hover:bg-blue-950/5 flex items-center px-12 gap-6  border-b-zinc-900/10  hover:cursor-pointer": true,
        "bg-blue-950/5": activeSection === "account"

    })}>
      <Settings strokeWidth={1}></Settings> <p className="text-blue-950 text-sm">Account Settings</p>
    </li>
    <li  onClick={() => updateSearchParams("settings")} className={cn({
        "w-full h-14 hover:bg-blue-950/5 flex items-center px-12 gap-6  border-b-zinc-900/10  hover:cursor-pointer": true,
        "bg-blue-950/5": activeSection === "settings"

    })}>
      <AppWindow strokeWidth={1}></AppWindow> <p className="text-blue-950 text-sm">Application Settings</p>
    </li>
  </ul>
</div>
  <div className="w-2/3  h-auto px-8">
          {
            activeSection == "archive" ? <Archive user={user}/> : activeSection === "settings" ? <AppSettings /> : activeSection === "account" ? <Account/> : null
          }
          </div>
    </div>
    
  </div>
  )
}

export default Navigation