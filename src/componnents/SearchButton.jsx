import axios from "axios";
import {useState} from "react";
import getRegionColour from "../helpers/getRegionColour.js";

export default function SearchButton() {
    const [allWorlds, setAllWorlds] = useState([]);

    async function fetchSearchData() {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all",);

            const sortedCountries = response.data.sort((a,b) => {
                return (a.population || 0) - (b.population || 0);
            });

            setAllWorlds(sortedCountries);

        } catch (error) {
            console.log(error);
        }
    }
    console.log(allWorlds);

    return (
        <section>
            <h1> Search countries</h1>
            <button type={'button'} onClick={fetchSearchData}> Search Countries</button>
            <ul>{allWorlds.map((country) => {
                return (<li key={country.id} className={getRegionColour(country.region)}>
                    <p>{country.name.common}</p>
                    <p>Has a population of {country.population} people</p>
                    <img
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        style={{width: '50px', height: '30px'}}
                    />
                </li>)
            })}
            </ul>
        </section>
    );
}


{/*<ul>*/
}
{/*    {*/
}
{/*        allWorlds.length > 0 &&*/}
{/*        <li>*/}
{/*            <p>{allWorlds[0].name.common}</p>*/}
{/*            <p>Has a population of {allWorlds[0].population} people</p>*/}
{/*        </li>*/}
{/*    }*/}
{/*</ul>*/}