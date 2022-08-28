import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [countriesData, setCountriesData] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false)

    function handleMode(){
        setIsDarkMode(!isDarkMode)
    }

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  return(
    <div className='container'>
    <Navbar handleMode={handleMode} isDarkMode={isDarkMode} mode={isDarkMode ? 'nav-dark' : 'nav-light'} />
      <main className={isDarkMode ? 'dark' : 'light'}>
        test
      </main>
    </div>
  )
}

export default App
