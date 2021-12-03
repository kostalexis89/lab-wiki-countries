import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom'


export default function CountryDetails({countries}) {
    const params = useParams()
    const countryId = params.alpha3code
    console.log(countryId)

    const countryToView = countries.filter(country=> {
        return countryId === country.alpha3Code
    })
    let imgSrc = `https://flagpedia.net/data/flags/h120/${countryToView[0].alpha2Code.toLowerCase()}.png`

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
                    551695 km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
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
