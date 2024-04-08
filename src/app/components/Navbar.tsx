import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div>
<ul className='flex justify-between m-10 items-center'>
    <div>
        <Link href="/"><li>Home</li></Link>
    </div>
    {/* ye div navbar ke right side ke elements ke ley */}
    <div className='flex gap-10'>
    <Link href="/dashboard"><li>Dashboard</li></Link>
    <Link href="/login"><li>Login</li></Link>
    <Link href="/register"><li>Register</li></Link>
    </div>
</ul>
    </div>
  )
}

export default Navbar
