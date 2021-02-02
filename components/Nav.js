import Link from 'next/link'
import Image from 'next/image'

export default () => (
  <header className="max-w-4xl mx-auto p-6 lg:px-0 flex items-center justify-between">
    <Link href="/">
      <a className="font-bold text-lg">Emily Malec Brown</a>
    </Link>

    <nav className="flex items-center">
      <NavItem href={'/about'}>About</NavItem>
      <NavItem href={'/posts'}>Posts</NavItem>
      <NavItem href={'https://www.github.com/emilymalecbrown'}>
        <Image src={'/images/github.png'} width={20} height={20} />
      </NavItem>
      <NavItem href={'https://www.linkedin.com/in/emilymalecbrown'}>
        <Image src={'/images/linkedin.png'} width={20} height={20} />
      </NavItem>
    </nav>
  </header>
)

function NavItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="p-2 ml-2 md:ml-4 underline">
        <span>{children}</span>
      </a>
    </Link>
  )
}
