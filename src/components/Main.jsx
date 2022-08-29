import {useState, useEffect} from 'react'
import Country from './Country'
import {nanoid} from 'nanoid'
import './styles/Main.css'
function Main(props){
    const [countriesData, setCountriesData] = useState([])
    const [formData, setFormData] = useState({
      input: '',
      select: ''
    })

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => {
            setCountriesData(data)
          })
      }, [])

      function filterCountries(event){
        const {value, tagName} = event.target
        setFormData(prevFromData => ({...prevFromData, [tagName.toLowerCase()]: value}))
      }

      function data(){
        if (formData.input !== '' || formData.select !== ''){
          return countriesData.filter(country => {
            const {name, region } = country
            if(name.common.toLowerCase().includes(formData.input.toLowerCase())
            && 
            (formData.select === ''|| region.toLowerCase() === formData.select)){
              console.log('hih')
              return true
            }else{
              return false
            }
          })
        }else{
          return countriesData
        }
      }
      
      
      
    
      const countries = data().map(country => {
        const {flags, name, population, region, capital } = country
        return <Country
            key={nanoid()} 
            flag={flags.svg}
            name={name.common}
            population={population}
            region={region}
            capital={capital}
        />
      })

    return(
        <main className={`main`}>
          <div className='form'>
            <input type="search" placeholder='Search for a country...' onChange={filterCountries} />
            <select defaultValue="" onChange={filterCountries}>
              <option value="" disabled hidden>Filter by Region</option>
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