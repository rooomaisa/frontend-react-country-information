import './App.css';
import Users from "./componnents/Users.jsx";
import SearchButton from "./componnents/SearchButton.jsx";
import worldImage from "./assets/world_map.png";


function App() {

    return (
        <>
            <section className={'image-container'}>
                <img src={worldImage} alt="World Map" />
                <div className="content">

                <SearchButton/>

                </div>
            </section>


        </>
    );
}

export default App
