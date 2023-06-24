import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { CarouselContainer } from './styles.js'
import { useState, useRef } from 'react'
import { Button } from '../Button'

import data from './data.js'

export const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const touchStart = useRef(0)

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? data.length - 1 : prevImage - 1))
  }

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === data.length - 1 ? 0 : prevImage + 1))
  }

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX
    const touchDiff = touchStart.current - touchEndX

    if (touchDiff > 50) {
      handleNext()
    } else if (touchDiff < -50) {
      handlePrev()
    }
  }

  return (
    <CarouselContainer onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className='navigation'>
        <Button className='prev' icon={FiChevronLeft} onClick={handlePrev} />

        <div className='carousel-content'>
          <div className='image'>
            <img src={data[currentImage].image} alt={data[currentImage].name} />
          </div>
          <span>{data[currentImage].name}</span>
        </div>

        <Button className='next' icon={FiChevronRight} onClick={handleNext} />
      </div>

      <div className='indicators'>
        {data.map((item, index) => (
          <button
            key={index}
            className={`indicator ${currentImage === index ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </CarouselContainer>
  )
}
