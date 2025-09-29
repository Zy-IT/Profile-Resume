import Navbar from "../../Components/Navbar/Navbar";
import { BackgroundBeams } from "../../Components/UI/backgroundBeams";


function Contacts() {

    return (
        <div className="Contacts-Screen">
            <BackgroundBeams />
            <Navbar />
            <div className="Contacts-Container">
                <div className="Contacts-Header">
                    <div className="Contacts-Title">
                        <h1>Contacts</h1>
                    </div>
                    <div className="Contacts-ShortMessage">
                        <p>

                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contacts;