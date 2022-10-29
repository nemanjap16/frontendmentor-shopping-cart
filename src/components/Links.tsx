import { nameID } from '../types/Types'

type linksProps = {
  children: nameID[]
}

const Links = ({ children }: linksProps) => {
  return (
    <ul className='flex gap-6'>
      {children.map((item) => (
        <li key={item.id} className='link-style'>
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default Links
