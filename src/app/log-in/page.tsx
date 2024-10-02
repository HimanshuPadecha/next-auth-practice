"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'

function Login() {
  const { data: session } = useSession()
  return (
    <div className='container mx-auto flex items-center justify-center min-h-screen'>
      {!session && <button onClick={()=> signIn("github")} className='bg-white p-4 text-black rounded-lg'>Sign in with github</button>}
      {session && <button onClick={()=> signOut()} className='bg-white p-4 text-black rounded-lg'>Logout</button>}
    </div>
  )
}

export default Login
