import React, { useState } from 'react';
import  './Country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country);

    const handleVisited = () => {
        // if(visited) setVisited(false); 
        // else setVisited(true);

        // setVisited(visited ? false : true);

        setVisited(!visited);    // toggle system
        handleVisitedCountries(country);
    }

    return (
        // ${visited && 'country-visited'}
        // ${visited ? 'country-visited' : 'country-not-visited' }
        <div className={`country ${visited && 'country-visited'}` }>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} -- {country.area.area > 300000 ? "Big country" : "Small country" } </p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button> &nbsp;&nbsp;
            <button onClick={() => {handleVisitedFlags(country?.flags?.flags?.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;

/**
 * 1. Inline css (style object)
 * 2. External css 
*/