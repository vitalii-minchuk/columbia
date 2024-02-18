import { Header } from '@/components/layout'
import type{ PropsWithChildren } from 'react'

export default function HomeLayout(props: PropsWithChildren) {
    const {children} = props

  return (
    <main className='root'>
      <Header />
      <div className='root-container'>
        <div className='wrapper'>
      {children}

        </div>
      </div>
      </main>
  )
}