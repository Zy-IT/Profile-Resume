import Navbar from '../../Components/Navbar/Navbar';
import './About.css';


function About() {

    return (
        <div className="About-Screen">
            <Navbar />
            <div className="About-Container">'
                {/* Header Part */}'
                <div className='About-Header'>
                    <div className='About-Header-Content'>
                        <h1>About Me</h1>
                        <p>Get to know me better</p>
                    </div>
                </div>

                {/* About Me Part */}
                <section className='About-Me'>
                    <div className='About-Me-Content'>
                        <div className='About-Me-Content-1'>
                            <h2>Who am I?</h2>
                            <h1>Hi, I'm Zyril A. Paraoan</h1>
                            <p>I'm a 3rd year college student taking Bachelor of Science in Information Technology. I'm currently learning web development and I'm looking for a job as a web developer.</p>
                        </div>
                        <div className='About-Me-Content-2'>
                            <h1>Another here</h1>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default About;