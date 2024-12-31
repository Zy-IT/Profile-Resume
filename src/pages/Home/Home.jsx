import Navbar from "../../Components/Navbar/Navbar";
import './Home.css';

function Home() {

    return (
        <div className="Home-Screen">
            <Navbar />
            <div className="Home-Container">
                <section className="Home-Section">
                    <div className="Home-Title">
                        <div className="Home-Title-Content">
                            <h1>Hey, There</h1>
                        </div>
                        <div className="Home-Subtitle-Content">
                            <h3>I am</h3>
                        </div>
                    </div>

                    <div className="Home-Name">
                        <div className="Home-Content-1stName">
                            <h1>Zyril</h1>
                        </div>
                        <div className="Home-Content-2ndName">
                            <h1>Ang-angco</h1>
                        </div>
                        <div className="Home-Content-3rdName">
                            <h1>Paraoan</h1>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;