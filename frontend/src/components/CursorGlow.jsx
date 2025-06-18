import React, { useEffect } from 'react'
import './CursorGlow.css'

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow')
    const move = e => {
      glow.style.top = `${e.clientY}px`
      glow.style.left = `${e.clientX}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor-glow"></div>
}

export default CursorGlow
