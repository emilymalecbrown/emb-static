import { Flex, NavLink } from 'theme-ui'

export default () => (
  <Flex as='nav'>
    <NavLink href='/' p={2}>
      Home
    </NavLink>
    <NavLink href='/blog' p={2}>
      Blog
    </NavLink>
    <NavLink href='/peloton' p={2}>
      Peloton
    </NavLink>
  </Flex>
)
