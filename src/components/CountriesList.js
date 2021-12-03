import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList({countries}) {
    
    const countriesList = countries.map(countrie => {
    //    console.log(countrie.alpha2Code.toLowerCase())
       let imgSrc = `https://flagpedia.net/data/flags/h120/${countrie.alpha2Code.toLowerCase()}.png`
        // console.log(countrie.alpha3Code)
        return (
            <div key={countrie.alpha3Code} className="list-group">
          {/* <p key={countrie.alpha3Code}>{countrie.name.common}</p> */}
          <a className="list-group-item list-group-item-action" href="/">
          <img src={imgSrc}/><p>{countrie.name.common}</p>
          </a>
        </div>
        )
      })
    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            {countriesList}
        </div>
    )
}
