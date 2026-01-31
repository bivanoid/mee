import { useEffect, useState, useContext, useRef } from "react"
import DownSvg from "../iconSvg/scrollToBottomic"

export default function ButtonUp() {

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        }

      const [showUpButton, setShowUpButton] = useState('')
    
        useEffect(() => {
          function showButton() {
            setShowUpButton(window.scrollY <= 747)
          }
    
          showButton()
    
          window.addEventListener('scroll', showButton)
    
          return () => window.removeEventListener('scroll', showButton)
        }, [])

    return (
        <button className={`buttonUp ${showUpButton ? 'down' : 'up'}`} onClick={scrollToTop}><DownSvg/></button>
    )
}