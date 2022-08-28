import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false)

    function handleMode(){
        setIsDarkMode(!isDarkMode)
    }

  return(
    <div className='container'>

    <Navbar handleMode={handleMode} 
    isDarkMode={isDarkMode} 
    mode={isDarkMode ? 'nav-dark' : 'nav-light'} 
    />
      <Main 
      mode={isDarkMode ? 'dark' : 'light'} 
      />
    </div>
  )
}

export default App
