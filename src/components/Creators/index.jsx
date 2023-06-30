import { Container } from './styles'
import { useState, useRef, useEffect } from 'react'

import data from './data'

export const Creators = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      {isMobile ? (
        <div className='content'>
          <img src={data[currentImage].image} alt={data[currentImage].name} />

          <div className='info'>
            <span>{data[currentImage].name}</span>
            <span>{data[currentImage].role}</span>
          </div>
        </div>
      ) : (
        data.map((item, index) => (
          <div className='content' key={index}>
            <img src={item.image} alt={item.name} />

            <div className='info'>
              <span>{item.name}</span>
              <span>{item.role}</span>
            </div>
          </div>
        ))
      )}
    </Container>
  )
}
