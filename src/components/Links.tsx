import { NavLinks } from '../types/Types'

type linksProps = {
  children: NavLinks
}

const Links = ({ children }: linksProps) => {
  return (
    <ul className='flex gap-6' aria-label='Menu list'>
      {children.map((item) => (
        <li key={item.id} className='link-style'>
          <a href={`#${item.name}`}>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default Links
