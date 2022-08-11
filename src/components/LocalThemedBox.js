import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import '../styles/App.css';

const LocalThemedBox = () => {
      const themeToggle = useContext(ThemeContext)
      const [localTheme, setLocalTheme] = useState(themeToggle.theme)
      const themeName = localTheme === 'light' ? 'dark' : 'light'
      useEffect(() => {
      setLocalTheme(themeToggle.theme)
      },[themeToggle.theme])
return(
    <div className={`bg-${localTheme}`} style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        <p className={`txt-${localTheme}`} id="local-themed-text-container">Hi this is local theme</p>
        <button className={`btn btn-${localTheme} txt-${localTheme}`} onClick={() => setLocalTheme(themeName)}
        id="global-theme-toggler">Switch to { themeName } theme</button>
    </div>
   )
}
export { LocalThemedBox }
