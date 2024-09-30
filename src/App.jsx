import './App.css';
import Users from "./componnents/Users.jsx";
import SearchButton from "./componnents/SearchButton.jsx";
import worldImage from "./assets/world_map.png";
import SearchButtonSecond from "./componnents/SearchButtonSecond.jsx";


function App() {

    return (
        <>
            <section className={'image-container'}>
                <img src={worldImage} alt="World Map" />
                <div className="content">

                <SearchButton/>
                <SearchButtonSecond/>

                </div>
            </section>

            {/*<section>*/}
            {/*    <SearchButtonSecond/>*/}
            {/*</section>*/}


        </>
    );
}

export default App
