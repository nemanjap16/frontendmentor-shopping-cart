import productImg1 from '../assets/images/image-product-1.jpg'
import productImg2 from '../assets/images/image-product-2.jpg'
import productImg3 from '../assets/images/image-product-3.jpg'
import productImg4 from '../assets/images/image-product-4.jpg'
import product1thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import product2thumbnail from '../assets/images/image-product-2-thumbnail.jpg'
import product3thumbnail from '../assets/images/image-product-3-thumbnail.jpg'
import product4thumbnail from '../assets/images/image-product-4-thumbnail.jpg'
import { CartIcon, MinusIcon, PlusIcon } from '../assets/icons/Icons'
import Carousel from './Carousel'

const slides = [
  { url: productImg1, title: 'product slide 1' },
  { url: productImg2, title: 'product slide 2' },
  { url: productImg3, title: 'product slide 3' },
  { url: productImg4, title: 'product slide 4' }
]

const Product = () => {
  return (
    <section className='flex flex-col items-center gap-6 lg:gap-16 lg:p-16 xl:flex-row'>
      <div className='hidden w-[40%] lg:block'>
        <figure className='flex w-fit flex-col gap-4 overflow-hidden'>
          <img className='rounded-2xl' src={productImg1} alt='product' />
          <figcaption className='flex justify-between'>
            <img
              className='cursor-pointer rounded-2xl hover:opacity-70'
              src={product1thumbnail}
              alt='product-1-thumbnail'
              width={100}
            />
            <img
              className='cursor-pointer rounded-2xl hover:opacity-70'
              src={product2thumbnail}
              alt='product-2-thumbnail'
              width={100}
            />
            <img
              className='cursor-pointer rounded-2xl hover:opacity-70'
              src={product3thumbnail}
              alt='product-3-thumbnail'
              width={100}
            />
            <img
              className='cursor-pointer rounded-2xl hover:opacity-70'
              src={product4thumbnail}
              alt='product-4-thumbnail'
              width={100}
            />
          </figcaption>
        </figure>
      </div>
      {/* on mobile */}
      <div className='lg:hidden'>
        <div className='w-full overflow-hidden'>
          <Carousel slides={slides} width={'100%'} />
        </div>
      </div>
      <aside className='flex w-full flex-col lg:w-1/3'>
        <h4 className='text-sm font-bold uppercase tracking-wide text-orange'>
          sneaker company
        </h4>
        <h1 className='mt-3 text-3xl font-bold text-veryDarkBlue lg:mt-5 lg:text-4xl'>
          Fall Limite Edition Sneakers
        </h1>
        <p className='mt-5 text-darkGrayishBlue lg:mt-10'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a double rubber outer sole, they'll withstand everything
          weather can offer.
        </p>
        <div className='mt-5 flex items-center justify-between lg:flex-col lg:items-start'>
          <div className='flex items-center gap-6'>
            <div className='text-3xl font-bold text-veryDarkBlue'>$125.00</div>
            <div className='rounded bg-paleOrange px-2 py-1 text-xs font-bold text-orange'>
              50%
            </div>
          </div>
          <span className='mt-1 text-darkGrayishBlue line-through'>
            $250.00
          </span>
        </div>
        <div className='mt-8 flex flex-col gap-3 lg:mt-16 lg:flex-row'>
          <div className='flex w-full items-center justify-between rounded-md bg-lightGrayish p-3 text-orange  lg:w-[160px]'>
            <button aria-label='Decrease amount'>
              <MinusIcon />
            </button>
            <span
              aria-label='Current amount'
              className='font-bold text-veryDarkBlue'
            >
              0
            </span>
            <button aria-label='Increase amount'>
              <PlusIcon />
            </button>
          </div>
          <button
            aria-label='add to cart'
            className='flex w-full items-center justify-center gap-5 rounded-md bg-orange p-3 font-bold text-lightGrayish lg:w-[300px]'
          >
            <span>
              <CartIcon color={'hsl(25, 100%, 94%)'} />
            </span>
            Add to cart
          </button>
        </div>
      </aside>
    </section>
  )
}

export default Product
