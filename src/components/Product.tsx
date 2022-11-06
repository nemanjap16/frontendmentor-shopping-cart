import { CartIcon, MinusIcon, PlusIcon } from '../assets/icons/Icons'
import Carousel from './Carousel'
import { useBucketContext } from '../context/bucketContext'
import { useState } from 'react'

const Product = () => {
  const { dispatch, cartItem, imgURL, amount } = useBucketContext()

  return (
    <section className='flex flex-col items-center gap-6 lg:gap-16 lg:p-16 xl:flex-row'>
      <div className='hidden w-[40%] lg:block'>
        <figure className='flex w-fit flex-col gap-4'>
          <button
            aria-label='Zoom in'
            onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}
          >
            <img
              className='cursor-zoom-in rounded-2xl'
              src={imgURL}
              alt='product'
            />
          </button>
          <figcaption className='flex justify-between'>
            {cartItem.images.map((el, i) => (
              <button
                datatype='ring-orange'
                className='rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange'
                aria-label='Select product'
                key={el.title}
                onClick={() => dispatch({ type: 'SET_URL', payload: el.url })}
              >
                <img
                  className='cursor-pointer rounded-2xl object-cover hover:opacity-70'
                  src={el.url}
                  alt={el.title}
                  width={100}
                />
              </button>
            ))}
          </figcaption>
        </figure>
      </div>
      {/* on mobile */}
      <div className='lg:hidden'>
        <div className='w-full overflow-hidden'>
          <Carousel slides={cartItem.images} width={'100%'} />
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
            <button
              disabled={amount === 0}
              aria-label='Decrease amount'
              onClick={() => dispatch({ type: 'DECREMENT' })}
            >
              <MinusIcon />
            </button>
            <span
              aria-label='Current amount'
              className='font-bold text-veryDarkBlue'
            >
              {amount < 0 ? 0 : amount}
            </span>
            <button
              disabled={amount === 0}
              aria-label='Increase amount'
              onClick={() => dispatch({ type: 'INCREMENT' })}
            >
              <PlusIcon />
            </button>
          </div>
          <button
            disabled={amount !== 0}
            aria-label='Add to cart'
            className='btn-primary disabled:cursor-not-allowed'
            onClick={() => dispatch({ type: 'ADD_ITEM' })}
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
