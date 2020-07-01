import Link from 'next/link'

export default () => (
  <header className='max-w-4xl mx-auto mb-4 flex items-center justify-between px-4 py-6'>
    <Link href='/'>
      <a className='font-bold text-lg'>Emily Malec Brown</a>
    </Link>

    <nav className='flex items-center'>
      <NavItem href='/about'>About</NavItem>
      <NavItem href='/posts'>Posts</NavItem>
      <NavItem href='/workouts'>Workouts</NavItem>
    </nav>
  </header>
)

function NavItem ({ href, children }) {
  return (
    <Link href={href}>
      <a className='p-2 hover:bg-gray-200 dark-hover:bg-gray-700 ml-2 md:ml-4'>
        {children}
      </a>
    </Link>
  )
}
