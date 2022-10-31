import { BucketIcon } from '../assets/icons/Icons'
import avatar from '../assets/images/image-avatar.png'
import Cart from './Cart'

const Bucket = () => {
  const displayCart = () => {
    const cart = document.getElementById('cart')
    cart?.classList.toggle('hidden')
  }
  return (
    <div className='relative'>
      <div className='flex items-center gap-4 sm:gap-10'>
        <button
          onClick={displayCart}
          aria-label='display shopping cart'
          className='cursor-pointer'
        >
          <BucketIcon />
        </button>
        <button
          onClick={displayCart}
          aria-label='display shopping cart'
          className='cursor-pointer rounded-full border-4 border-transparent transition duration-300 ease-in-out hover:border-orange'
        >
          <img
            className='hidden lg:block'
            src={avatar}
            alt='avatar'
            height={50}
            width={50}
          />
          <img
            className='lg:hidden'
            src={avatar}
            alt='avatar'
            height={25}
            width={25}
          />
        </button>
      </div>
      <Cart />
    </div>
  )
}

export default Bucket
