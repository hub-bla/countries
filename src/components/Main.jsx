import {useState, useEffect} from 'react'
import Country from './Country'
import {nanoid} from 'nanoid'
function Main(props){
    const [countriesData, setCountriesData] = useState([])

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => {
            console.log('hi')
            setCountriesData(data)
          })
      }, [])
    
    
      const countries = countriesData.map(country => {
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
        <main className={props.mode}>
            {countries}
        </main>
    )
}

export default Main