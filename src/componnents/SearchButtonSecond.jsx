import axios from "axios";
import {useState} from "react";
import roundToMillions from "../helpers/roundToMillions.js";


export default function SearchButtonSecond () {
    const [searchCountry, SetSearchCountry] = useState([]);

    async function fetchCountryData() {
        try {
            const response = await
                axios.get("https://restcountries.com/v3.1/name/deutschland",);
                SetSearchCountry(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    console.log(searchCountry)


    return (
        <section>
            <button type={'button'}
                    onClick={fetchCountryData}>
                Search specific country
            </button>
            {searchCountry.length > 0 && (
                <div>
                    <img
                        src={searchCountry[0].flags.svg}
                        alt={`Flag of ${searchCountry[0].name.common}`}
                        style={{width: '50px', height: '30px'}}
                    />
                    <p>{searchCountry[0].name.common} is situated in</p>
                    <p>{searchCountry[0].region} </p>
                    <p>and the capital is {searchCountry[0].capital}</p>
                    <p> it has a population of {roundToMillions(searchCountry[0].population)} people and it borders with </p>
                </div>
            )}
        </section>

    );
}
