import { useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import { BackgroundBeams } from "../../Components/UI/backgroundBeams";
import './Contacts.css';

function Contacts() {
    const [copiedField, setCopiedField] = useState('');

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(''), 2000);
    };

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
                            Let&apos;s talk! Whether you have a project in mind, want to collaborate, hire me
                            or just want to say hi—I&apos;d love to hear from you.
                        </p>
                    </div>
                </div>

                <div className="Contacts-Content">
                    <div className="Contact-Methods">
                        <div className="Contact-Item" onClick={() => handleCopy('zyrilparaoann@gmail.com', 'email')}>
                            <h3>📧 Email</h3>
                            <p>zyrilparaoann@gmail.com</p>
                            {copiedField === 'email' && <span className="copied-label">✓ Copied!</span>}
                        </div>
                        
                        <div className="Contact-Item" onClick={() => handleCopy('https://www.linkedin.com/in/zyril-paraoan-24bb8932b/', 'linkedin')}>
                            <h3>💼 LinkedIn</h3>
                            <p>linkedin.com/in/zyril-paraoan</p>
                            {copiedField === 'linkedin' && <span className="copied-label">✓ Copied!</span>}
                        </div>
                        
                        <div className="Contact-Item" onClick={() => handleCopy('https://github.com/Zy-IT?tab=overview&from=2025-04-01&to=2025-04-06', 'github')}>
                            <h3>💻 GitHub</h3>
                            <p>github.com/Zy-IT</p>
                            {copiedField === 'github' && <span className="copied-label">✓ Copied!</span>}
                        </div>
                        
                        <div className="Contact-Item" onClick={() => handleCopy('+63 955 580 6445', 'phone')}>
                            <h3>📱 Phone</h3>
                            <p>+63 955-580-6445 or +63-920-842-1093</p>
                            {copiedField === 'phone' && <span className="copied-label">✓ Copied!</span>}
                        </div>

                        <div className="Contact-Item">
                            <h3>📍 Location</h3>
                            <p>Isabela, Philippines</p>
                        </div>
                    </div>

                    <div className="Availability">
                        <p className="status">
                            🟢 Currently available for freelance projects and collaborations
                        </p>
                    </div>

                    <div className="Response-Time">
                        <p>⏱️ I typically respond within 24 hours</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;