import Link from 'next/link'

export default () => (
  <header className="max-w-4xl mx-auto p-6 lg:px-0 flex items-center justify-between">
    <Link href="/">
      <a className="font-bold text-lg">Emily Malec Brown</a>
    </Link>

    <nav className="flex items-center">
      <NavItem href={'/about'}>About</NavItem>
      <NavItem href={'/posts'}>Posts</NavItem>
      <NavItem href={'/workouts'}>Workouts</NavItem>
    </nav>
  </header>
)

function NavItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="p-2 hover:bg-indigo-200 ml-2 md:ml-4 underline">
        <span>{children}</span>
      </a>
    </Link>
  )
}
