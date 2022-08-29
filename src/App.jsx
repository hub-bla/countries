import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false)

    function handleMode(){
        setIsDarkMode(!isDarkMode)
    }
    
    useEffect( () => {
      document.body.classList.add(isDarkMode ? 'dark' : 'light')

      return () => {
        document.body.classList.remove(isDarkMode ? 'dark' : 'light')
      }
    }, [isDarkMode])

  return(
    <div className='container'>

    <Navbar handleMode={handleMode} 
    isDarkMode={isDarkMode} 
    mode={isDarkMode ? 'nav-dark' : 'nav-light'} 
    />
      <Main 
      />
    </div>
  )
}

export default App
