import {useState, useEffect} from 'react'
import Country from './Country'
import {nanoid} from 'nanoid'
import './styles/Main.css'
function Main(){
    const [countriesData, setCountriesData] = useState([])
    const [formData, setFormData] = useState({
      input: '',
      select: ''
    })
    const [currentCountry, setCurrentCountry] = useState()

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => {
            setCountriesData(() => {
              return data.map(country => {
                return{
                  ...country,
                  isPicked: false
                }
              })
            })
          })
      }, [])

      function filterCountries(event){
        const {value, tagName} = event.target
        setFormData(prevFromData => ({...prevFromData, [tagName.toLowerCase()]: value}))
      }

      function data(){
        if(currentCountry){
          return currentCountry
        }
        if (formData.input !== '' || formData.select !== ''){
          return countriesData.filter(country => {
            const {name, region } = country
            if(name.common.toLowerCase().includes(formData.input.toLowerCase())
            && 
            (formData.select === ''|| region.toLowerCase() === formData.select)){
              return true
            }else{
              return false
            }
          })
        }else{
          return countriesData
        }
      }
      
      function picked(nameNeeded){
        setCurrentCountry(() => {
          const current =  countriesData.filter(country => {
            console.log(country)
            const {name} = country
            return name.common === nameNeeded ? true : false
          })
          return current.map(data => ({...data, isPicked: true}))
        })
      }

      function unpicked(){
        setCurrentCountry()
      }

      console.log(countriesData)
      
    
      const countries = data().map(country => {
        return <Country
            key={nanoid()}
            domain={country.tld}
            currencies={country.currencies}
            languages={country.languages}
            name={country.name}
            flags={country.flags}
            population={country.population}
            region={country.region}
            subregion={country.subregion}
            capital={country.capital}
            isPicked={country.isPicked}
            picked={picked}
            unpicked={unpicked}
        />
      })

    return(
        <main className={`main`}>
          <div className='form'>
            {!currentCountry && <input type="search" placeholder='Search for a country...' onChange={filterCountries} className='search-name'/>}
            {!currentCountry && <select defaultValue="" onChange={filterCountries}>
              <option value="" disabled hidden>Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>}
          </div>
          <div className='countries'>
            {countries}
          </div>
        </main>
    )
}

export default Main