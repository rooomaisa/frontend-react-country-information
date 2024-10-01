import axios from "axios";
import {useState} from "react";
import roundToMillions from "../helpers/roundToMillions.js";


export default function SearchButtonSecond () {
    // const [countries, setCountries] = useState([])
    const [countryInfo, setCountryInfo] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');




    async function handleSearch(event) {
        event.preventDefault();
        setError('');

        try {
            const response = await
                axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
            const country = response.data[0];
                setCountryInfo(country);
                setSearchQuery('');

        } catch (error) {
            console.log(error);
            setError(`${searchQuery} bestaat niet. Probeer het opnieuw.`);
        }
    }


    return (
        <section>
            <form onSubmit={handleSearch}>
            <input
                type={'text'}
                name={'query'}
                id={'query-field'}
                placeholder={'search for a country'}
                value={searchQuery}
                onChange={(event) => setSearchQuery (event.target.value)}
                />
            <button type={'submit'}>
                Search specific country
            </button>
            </form>

            {Object.keys(countryInfo).length > 0 && (
                <div>
                    <img
                        src={countryInfo.flags.svg}
                        alt={`Flag of ${countryInfo.name.common}`}
                        style={{width: '50px', height: '30px'}}
                    />
                    <p>{countryInfo.name.common} is situated in</p>
                    <p>{countryInfo.region} </p>
                    <p>and the capital is {countryInfo.capital}</p>
                    <p> it has a population of {roundToMillions(countryInfo.population)} people and it borders with </p>
                </div>
            )}
        </section>

    );
}
