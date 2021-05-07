import React, { useContext } from 'react'
import LocaleContext from '../context/LocaleContext'

const activeStyle = {
  color: '#e34646'
}

export default function Nav() {
  const { theme, setTheme } = useContext(LocaleContext)
  const classBtn = theme == 'light' ? 'light-button' : 'dark-button'

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button className={`switchBtn ${classBtn}`} onClick={toggleTheme}>
      {theme == 'light' ? '🔦' : '💡'}
    </button>
  )
}
