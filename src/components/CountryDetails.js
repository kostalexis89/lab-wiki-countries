import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



export default function CountryDetails({countries}) {
    const params = useParams()
    const countryId = params.alpha3code
    // console.log(countryId)

    const countryToView = countries.filter(country=> {
        return countryId === country.alpha3Code
    })
    let imgSrc = `https://flagpedia.net/data/flags/h120/${countryToView[0].alpha2Code.toLowerCase()}.png`
    
    
    const borderListArray = countryToView[0].borders.map(alpha3code=>{
        for(let i=0;i<countries.length;i++){
            if(countries[i].alpha3Code===alpha3code){
                return [countries[i].name.common, countries[i].alpha3Code]
            }
        }
        // console.log(alpha3code)
    })
    console.log(borderListArray)
    const borderListDisplay = borderListArray.map(countryBorders=>{
      console.log(countryBorders[1])
      const link =`/${countryBorders[1]}`
      return <>
      <li><Link to={link}>{countryBorders[0]}</Link></li>
      </>
    })
    const result = <>
        <img src={imgSrc} alt="country flag" style={{width: "300px"}}/>
            <h1>{countryToView[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                  <td>{countryToView[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {countryToView[0].area} <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {borderListDisplay}
                      </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </>
    
    return (
        <div className="col-7">
           
            {result}
        </div>
    )
}
