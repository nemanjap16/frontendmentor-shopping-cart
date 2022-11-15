import { useRef } from 'react'
import { CloseIcon } from '../assets/icons/Icons'
import { useBucketContext } from '../context/bucketContext'
import { NavLinks } from '../types/Types'

type propLinks = {
  links: NavLinks
}

const NavSlider = ({ links }: propLinks) => {
  const { dispatch, isOpenMenu } = useBucketContext()
  const nav = useRef<HTMLDivElement>(null)
  const toggle = () => {
    nav.current?.classList.toggle('-translate-x-full')
  }

  return (
    <>
      {isOpenMenu && (
        <div className='absolute inset-0 z-50 bg-lightbox'>
          <nav
            ref={nav}
            className='h-full w-3/5 origin-left bg-white p-5 text-veryDarkBlue'
          >
            <button
              aria-label='Close mobile menu'
              onClick={() => [dispatch({ type: 'TOGGLE_NAV' }), toggle()]}
            >
              <CloseIcon />
            </button>
            <ul
              className='mt-20 flex flex-col gap-4 font-bold'
              aria-label='Menu list'
              onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
            >
              {links.map((el) => (
                <li key={el.id}>
                  <a href={`#${el.name}`} className='capitalize'>
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default NavSlider
