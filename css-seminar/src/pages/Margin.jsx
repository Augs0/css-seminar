import React from 'react';
import { useState } from 'react';

export default function Margin() {
    const [countryFacts, setCountryFacts] = useState([
        {id:1, name: 'Japan', capital: 'Tokyo', nativeName:'日本', approxPopulation:124840000 },
        {id: 2, name: 'Spain', capital: 'Madrid', nativeName: 'España', approxPopulation: 47325360},
        {id: 3, name: 'Uzbekistan', capital: 'Tashkent', nativeName: 'Ўзбекистон Республикаси', approxPopulation: 36024000},
        {id: 4, name: 'Fiji', capital: 'Suva', nativeName: 'Matanitu Tugalala o Viti  / फ़िजी गणराज्य', approxPopulation: 926276}
      ])

  return (
    <main id="main">
        <a href="/">Home</a>
       <section>
       <h2>Instructions</h2>
          <p>Centre this list of facts using the following properties: width, margin and text-align</p>
       </section>
         <section id="country-facts-section">
          <h2>Country facts</h2>
          {countryFacts.map((country) => {
            return <article className="country-facts-article" key={country.id}>
              <h3>{country.name} ({country.nativeName})</h3>
              <p>Capital: {country.capital}</p>
              <p>Approximate population: {country.approxPopulation}</p>
            </article>
          })}
        </section>
          <details>
            <summary>
              How to solve this?
              <span class="icon" aria-label="click to read the answer">👇</span>
            </summary>
            <pre>
              {
                `
            #country-facts-section{
              width:50%; /*this width could be anything*/
              margin: 0 auto;
              text-align:center;
            }
            `
          }
            </pre>
            To use the `margin: 0 auto;` method, the element being centred must have a width! You can see that this method may have limits sometimes, but as long as your element has a width - whether it's static or relative to its container, this method can be used. The elemnt should also have a block display value.
           </details>
    </main>
  )
}
