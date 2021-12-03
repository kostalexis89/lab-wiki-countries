import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList({countries}) {
    
    const countriesList = countries.map(countrie => {
    //    console.log(countrie.alpha2Code.toLowerCase())
       let imgSrc = `https://flagpedia.net/data/flags/h120/${countrie.alpha2Code.toLowerCase()}.png`
       const link =`/${countrie.alpha3Code}`
        // console.log(countrie.alpha3Code)
        return (
            <div key={countrie.alpha3Code} className="list-group">
          {/* <p key={countrie.alpha3Code}>{countrie.name.common}</p> */}
          <Link className="list-group-item list-group-item-action" to={link}>
          <img src={imgSrc} alt={countrie.name.common}/><p>{countrie.name.common}</p>
          </Link>
        </div>
        )
      })
    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            {countriesList}
        </div>
    )
}