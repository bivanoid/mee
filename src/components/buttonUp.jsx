import { useEffect, useState, useContext, useRef } from "react"
import DownSvg from "../iconSvg/scrollToBottomic"

export default function ButtonUp() {

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        }

      const [showUpButton, setShowUpButton] = useState(false)
  
        useEffect(() => {
          function showButton() {
            if (window.scrollY >= 1000) {
              setShowUpButton(true)
            } else {
              setShowUpButton(false)
            }
          }
    
          showButton()
    
          window.addEventListener('scroll', showButton)
    
          return () => window.removeEventListener('scroll', showButton)
        }, [])

    return (
        <button className={`buttonUp ${showUpButton ? 'up' : 'down'}`} onClick={scrollToTop}><DownSvg/></button>
    )
}