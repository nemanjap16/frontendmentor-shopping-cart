import { BucketIcon } from '../assets/icons/Icons'
import avatar from '../assets/images/image-avatar.png'
import { useBucketContext } from '../context/bucketContext'
import Cart from './Cart'

const Bucket = () => {
  const { dispatch, amount } = useBucketContext()
  return (
    <div className='relative'>
      <div className='flex items-center gap-4 sm:gap-10'>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_CART' })}
          aria-label='Display shopping cart'
          className='cursor-pointer'
        >
          <div className='relative'>
            {amount > 0 && (
              <span className='absolute -top-4 left-3 grid  h-6 w-8 place-content-center rounded-full bg-orange text-xs font-bold text-lightGrayish'>
                {amount}
              </span>
            )}
            <BucketIcon />
          </div>
        </button>
        <div className='rounded-full border-4 border-transparent transition duration-300 ease-in-out hover:border-orange'>
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
        </div>
      </div>
      <Cart />
    </div>
  )
}

export default Bucket
