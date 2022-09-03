import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Country.css'

function Country(props){
    // function getFromDict(dict){
    //     const data = Object.keys(dict).map(objKey =>{
    //         return (
    //             <div>{props.}</div>
    //         )
    //     })
    // }
    function getNative(){
        // i dont need to map over it
        const nativeNames = Object.keys(props.name.nativeName).map(objKey => {
        
            return (
                <div>
                    {props.name.nativeName[objKey].common}
                </div>
            )
        })
        return nativeNames[0]
    }

    function getCurrencies(){
        const currs = Object.keys(props.currencies).map(objKey =>{
            return(
                <div>{props.currencies[objKey].name}</div>
            )
        })
        return currs  
    }
    
    function getLanguages(){
        const langs = Object.keys(props.languages).map(objKey =>{
            return <div>{props.languages[objKey]}</div>
        })
        return langs
    }

    return (
        <div className='padding-container'>
            {props.isPicked ? 
            <div className='single-country'>
                <div className='flex-container'>
                    <button className={`back ${props.isDarkMode ? 'dark-form' : ''}`} onClick={props.unpicked}>
                        {/* <FontAwesomeIcon icon={["fa-solid fa-arrow-left"]} /> */}
                        Back
                    </button>
                    <img src={props.flags.svg} alt={`flag of ${props.name.common}`} className='single-country-flag'/>
                </div>
                <div className='details'>
                    <h1 className='country-name'>{props.name.common}</h1>
                    <div className="grid-container">

                            <div className='detail'>
                                <span className='strong'>Native Name: </span>
                                {props.name.nativeName ? getNative() : ''}
                            </div>
                            <div className='detail'>
                                <span className='strong'>Population: </span>
                                {props.population}
                            </div>
                            <div className='detail'>
                                <span className='strong'>Region: </span>
                                {props.region}
                                </div>
                            <div className='detail'>
                                <span className='strong'>Sub Region: </span>
                                {props.subregion}
                            </div>
                            <div className='detail'>
                                <span className='strong'>Capital: </span>
                                {props.capital}
                            </div>
                            <div className='detail'>
                                <span className='strong'>Top Level Domain: </span>
                                {props.domain}
                            </div>
                            <div className='detail'>
                                <span className='strong'>Currencies: </span>
                                {getCurrencies()}
                            </div>
                            <div className='detail'>
                                <span className='strong'>Languages: </span>
                                {getLanguages()}
                            </div>
                    </div>

                </div>
            </div>
            :
            <div className="country" onClick={() => {props.picked(props.name.common)}}>
                <img src={props.flags.svg} alt={`flag of ${props.name.common}`} className='flag'/>
                <h4 className="name-of-country">{props.name.common}</h4>
                <div><span>Population: </span>{props.population}</div>
                <div><span>Region:</span>{props.region}</div>
                <div><span>Capital: </span>{props.capital}</div>
            </div>
        }
        </div>
    )
}

export default Country