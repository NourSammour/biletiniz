import React from 'react'
import Link from 'next/link'

export default () => (

  <ul>
    <li>
      <div>
        Hello World.{' '}
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
    </li>
    <li>
      <Link href='/b' as='/a'>
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href='/a' as='/b'>
        <a>b</a>
      </Link>
    </li>
    <li>
      <Link href={{ pathname: '/posts', query: { id: '2' } }} as='/posts/2'>
        <a>post #2</a>
      </Link>
    </li>
    <li>
      <div>{process.env.TEST}</div>
    </li>
  </ul>

);
