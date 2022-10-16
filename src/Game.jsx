// this just shows the canvas when it's rendered (and hides it when it's un-rendered)

import { useEffect } from 'react'
import { usePakemon } from './pakemon'

document.getElementById('c').style.display = 'none'

export default function Game () {
  const { session } = usePakemon()
  window.session = session
  useEffect(() => {
    document.getElementById('c').style.display = 'block'
    return () => {
      document.getElementById('c').style.display = 'none'
    }
  }, [])
  return null
}
