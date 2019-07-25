import React from 'react'
import Link from 'next/link'

export default () => (

  <div >
    <div className='hello'>
      <p>
        Hello World! Here's a secret shared with the client using Next env:{' '}
        <strong>{process.env.SECRET}</strong>, the secret is shared at build time,
        which means every reference to the secret is replaced with its value
      </p>
    </div>
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
        <div>{process.env.ANOTHER_SECRET}</div>
      </li>
    </ul>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>
  </div>
)

;
