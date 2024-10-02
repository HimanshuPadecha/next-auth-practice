"use client"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

interface AppProps {
    children:ReactNode
}

export default function sessionProvider(
  {children}:AppProps
) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}