import './styles/Country.css'

function Country(props){
    return (
        <div className="country">
            <img src={props.flag} alt={`flag of ${props.name}`} className='flag'/>
            <h4 className="name-of-country">{props.name}</h4>
            <div><span>Population: </span>{props.population}</div>
            <div><span>Region:</span>{props.region}</div>
            <div><span>Capital: </span>{props.capital}</div>
        </div>
    )
}

export default Country