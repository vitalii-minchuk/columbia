import type{ PropsWithChildren } from 'react'
import { Header, Sidebar } from '@/components/layout'

export default function HomeLayout(props: PropsWithChildren) {
    const {children} = props

  return (
    <main className='root'>
      <Sidebar />
      <div className='root-container'>
        <div className='wrapper'>
      {children}

        </div>
      </div>
      </main>
  )
}