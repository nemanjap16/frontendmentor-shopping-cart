import Logo from './Logo'
import Links from './Links'
import { NavLinks } from '../types/Types'
import Bucket from './Bucket'
import { MenuIcon } from '../assets/icons/Icons'
import { useBucketContext } from '../context/bucketContext'

type propLinks = {
  links: NavLinks
}

const Header = ({ links }: propLinks) => {
  const { dispatch } = useBucketContext()
  return (
    <header className='border-collapse lg:border-b-2 lg:border-solid lg:border-b-lightGrayish'>
      <nav className='flex items-baseline pt-5 pb-2 lg:pb-0'>
        <button
          className='mr-5 sm:hidden'
          onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
        >
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
