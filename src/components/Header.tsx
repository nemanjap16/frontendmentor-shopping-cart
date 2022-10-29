import Logo from './Logo'
import Links from './Links'
import { nameID } from '../types/Types'
import Bucket from './Bucket'
import { MenuIcon } from '../assets/icons/Icons'

type navProps = {
  links: nameID[]
}

const Header = ({ links }: navProps) => {
  return (
    <header className='border-b-2 border-solid border-b-lightGrayish'>
      <nav className='flex items-baseline pt-5'>
        <button className='mr-5 sm:hidden'>
          <MenuIcon />
        </button>
        <Logo>sneakers</Logo>
        <div className='hidden sm:block'>
          <Links>{links}</Links>
        </div>
        <div className='ml-auto'>
          <Bucket />
        </div>
      </nav>
    </header>
  )
}

export default Header
