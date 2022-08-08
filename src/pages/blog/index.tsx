import React from 'react'

import clsxm from '@/lib/clsxm'

import Button from '@/components/buttons/Button'

type BlogPageProps = {
  className?: string
} & React.ComponentPropsWithoutRef<'div'>

export default function BlogPage({ className, ...rest }: BlogPageProps) {
  const [User, setUser] = React.useState<string>('initialUser')
  return (
    <div className={clsxm('dark', className)} {...rest}>
      <div className='flex'>
        <div className='flex-1'>
          <h1>Blog</h1>
          <span className='flex flex-col'>{User}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur euismod, nisi nisl
          </p>
          <Button onClick={() => setUser('newUser')}>Click me</Button>
        </div>
        <Button onClick={() => setUser('user1')}>User 1</Button>
      </div>
    </div>
  )
}
