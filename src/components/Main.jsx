import {useState, useEffect} from 'react'
import Country from './Country'
import {nanoid} from 'nanoid'
import './styles/Main.css'
function Main(props){
    const [countriesData, setCountriesData] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => {
            setFilteredCountries(data)
            setCountriesData(data)
          })
      }, [])

      function filterCountriesByName(event){
        const {value} = event.target
        setFilteredCountries(countriesData.filter(country =>{
          const {name} = country
          console.log(name, value.toLowerCase())
          if(name.common.toLowerCase().includes(value.toLowerCase())){
            return true
          }else{
            return false
          }
        }))
      }

    console.log(filteredCountries)
    
      const countries = filteredCountries.map(country => {
        const {flags, name, population, region, capital } = country
        return <Country
            key={nanoid()} 
            flag={flags.svg}
            name={name.common}
            population={population}
            ragion={region}
            capital={capital}
        />
      })

    return(
        <main className={`main`}>
          <div className='form'>
            <input type="search" placeholder='Search for a country...' onChange={filterCountriesByName} />
            <select>
              <option disabled selected hidden>Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
          <div className='countries'>
            {countries}
          </div>
        </main>
    )
}

export default Main