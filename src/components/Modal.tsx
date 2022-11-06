import { useEffect, useState } from 'react'
import { CloseIconLarge, NextIcon, PreviousIcon } from '../assets/icons/Icons'
import { useBucketContext } from '../context/bucketContext'

export const Modal = () => {
  const { imgURL, isOpenModal, cartItem, dispatch } = useBucketContext()

  const [currentIndex, setCurrentIndex] = useState(() => {
    return cartItem.images.findIndex((el) => el.url === imgURL)
  })

  useEffect(() => {
    setCurrentIndex(() => {
      return cartItem.images.findIndex((el) => el.url === imgURL)
    })
  }, [imgURL])

  const moveSlide = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let btn = e.currentTarget.id
    if (btn === 'previous') {
      const isItFirstSlide = currentIndex === 0
      const newIndex = isItFirstSlide
        ? cartItem.images.length - 1
        : currentIndex - 1
      setCurrentIndex(newIndex)
      let newImg = cartItem.images.find((el: any, i) => i === newIndex)!
      dispatch({ type: 'SET_URL', payload: newImg.url })
      return
    }
    if (btn === 'next') {
      const isLastSlide = currentIndex === cartItem.images.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
      let newImg = cartItem.images.find((el: any, i) => i === newIndex)!
      dispatch({ type: 'SET_URL', payload: newImg.url })
      return
    }
  }
  return (
    <div className='hidden md:block'>
      {isOpenModal && (
        <div className='absolute inset-0 z-[100] grid place-content-center bg-lightbox'>
          <div className='flex flex-col'>
            <button
              aria-label='Close modal'
              className='ml-auto mb-7'
              onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}
            >
              <CloseIconLarge />
            </button>
            <div>
              <figure className=''>
                <div className='relative'>
                  <div className='absolute -left-5 flex h-full items-center'>
                    <button
                      id='previous'
                      aria-label='Previous'
                      className='grid h-11 w-11 place-content-center rounded-full bg-white'
                      onClick={moveSlide}
                    >
                      <PreviousIcon />
                    </button>
                  </div>
                  <div className='absolute -right-5 flex h-full items-center justify-between'>
                    <button
                      id='next'
                      aria-label='Next'
                      className='grid h-11 w-11 place-content-center rounded-full bg-white'
                      onClick={moveSlide}
                    >
                      <NextIcon />
                    </button>
                  </div>
                  <img
                    src={cartItem.images[currentIndex].url}
                    alt='product'
                    width={600}
                    className='rounded-2xl'
                  />
                </div>
                <figcaption className='mt-5 flex justify-evenly'>
                  {cartItem.images.map((el: any, i) => (
                    <button
                      datatype='ring-orange'
                      className='rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange'
                      aria-label='Select product'
                      key={el.title}
                      onClick={() => [
                        dispatch({ type: 'SET_URL', payload: el.url }),
                        setCurrentIndex(i)
                      ]}
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
          </div>
        </div>
      )}
    </div>
  )
}
