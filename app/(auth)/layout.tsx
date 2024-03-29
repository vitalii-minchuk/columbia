import type{ PropsWithChildren } from 'react'

export default function AuthLayout(props: PropsWithChildren) {
    const {children} = props

  return (
    <main className='auth'>{children}</main>
  )
}