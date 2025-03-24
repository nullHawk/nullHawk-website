"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
  speed?: number
}

export default function TypewriterEffect({ text, delay = 0, speed = 100 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true)
    }, delay)

    return () => clearTimeout(delayTimer)
  }, [delay])

  useEffect(() => {
    if (!startTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, startTyping])

  return (
    <span>
      {displayText}
      {currentIndex < text.length && startTyping && (
        <span className="inline-block w-[0.4em] sm:w-[0.5em] h-[1em] sm:h-[1.2em] bg-primary animate-pulse ml-1"></span>
      )}
    </span>
  )
}

