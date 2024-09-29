import axios from "axios";
import {useState} from "react";

export default function SearchButton() {
    const [allWorlds, setAllWorlds] = useState([]);

    async function fetchSearchData() {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all",);
            setAllWorlds(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    console.log(allWorlds);

    return (
        <section>
            <h1> Search countries</h1>
            <button type={'button'} onClick={fetchSearchData}> Search Countries</button>
            <ul>
                {
                    allWorlds.length > 0 &&
                    <li>
                        <p>{allWorlds[0].name.common}</p>
                        <p>Has a population of {allWorlds[0].population} people</p>
                    </li>
                }
            </ul>

            {/*<ul>{allWorlds.map((country) => {*/}
            {/*    return (<li key={country.id}>{country[0].name.common}</li>)*/}
            {/*})}*/}
            {/*</ul>*/}


        </section>
    );
}