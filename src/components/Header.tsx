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
    <header className='border-collapse lg:border-b-2 lg:border-solid lg:border-b-lightGrayish'>
      <nav className='flex items-baseline pt-5 pb-2 lg:pb-0'>
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
