import React, { useState } from 'react'
import { NextIcon, PreviousIcon } from '../assets/icons/Icons'
import { Slides } from '../types/Types'

type typeSlides = {
  slides: Slides
  width: string
}

const Carousel = ({ slides, width }: typeSlides) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const containerStyles = {
    width: `${width}`,
    marginInline: 'auto'
  }

  const sliderStyles = {
    width: `100%`,
    height: `100%`
  }

  const moveSlide = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let btn = e.currentTarget.id
    if (btn === 'previous') {
      const isItFirstSlide = currentIndex === 0
      const newIndex = isItFirstSlide ? slides.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
      return
    }
    if (btn === 'next') {
      const isLastSlide = currentIndex === slides.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
      return
    }
  }

  return (
    <figure className='relative'>
      <div className='absolute flex h-full w-full items-center justify-between px-4'>
        <button
          id='previous'
          aria-label='Previous'
          className='grid h-9 w-9 place-content-center rounded-full bg-white pr-1'
          onClick={moveSlide}
        >
          <PreviousIcon />
        </button>
        <button
          id='next'
          aria-label='Next'
          className='grid h-9 w-9 place-content-center rounded-full bg-white'
          onClick={moveSlide}
        >
          <NextIcon />
        </button>
      </div>
      <div style={containerStyles}>
        <div style={sliderStyles}>
          <img src={slides[currentIndex].url} alt='product' />
        </div>
      </div>
    </figure>
  )
}

export default Carousel
