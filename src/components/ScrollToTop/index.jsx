import { FiChevronUp } from 'react-icons/fi'
import { ScrollToTopButton } from './styles'
import { useState, useEffect } from 'react'

export const ScrollToTop = ({ delay = 100 }) => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    let timeoutId

    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const scrolled = document.documentElement.scrollTop
        setIsVisible(scrolled > 100)
      }, delay)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delay])

  return (
    <>
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
          <FiChevronUp size={20} />
        </ScrollToTopButton>
      )}
    </>
  )
}
