import Logo from './Logo'
import Links from './Links'
import { nameID } from '../types/Types'

type navProps = {
  links: nameID[]
}

const Header = ({ links }: navProps) => {
  return (
    <div>
      <nav className='flex items-baseline'>
        <Logo>Sneakers</Logo>
        <Links>{links}</Links>
      </nav>
    </div>
  )
}

export default Header
