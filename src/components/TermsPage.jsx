import React from 'react';
import Navbar from './Navbar';
import '../styles.css';

const TermsPage = () => {
    return (
        <div>
            <div className="page-content">
                <h1>Terms and Conditions</h1>
                <p>
                    Welcome to Egerton FreeMarket. These terms and conditions outline the rules and regulations for the use of our website.
                </p>
                <h2>Acceptance of Terms</h2>
                <p>
                    By accessing and using our website, you accept and agree to be bound by the terms and conditions outlined herein. If you do not agree with any part of these terms, you must not use our website.
                </p>
                <h2>Use of the Website</h2>
                <p>
                    You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person.
                </p>
                <h2>Content Ownership</h2>
                <p>
                    All content provided on this website is the property of Egerton FreeMarket and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or republish any content without prior written consent.
                </p>
                <h2>Limitation of Liability</h2>
                <p>
                    We make no warranties or representations about the accuracy or completeness of the content on our website. We shall not be liable for any damages arising from the use of or inability to use our website.
                </p>
                <h2>Changes to Terms</h2>
                <p>
                    We reserve the right to update or amend these terms and conditions at any time. Any changes will be posted on this page and will become effective immediately upon posting.
                </p>
                <p>
                    If you have any questions regarding these terms and conditions, please contact us.
                </p>
            </div>
        </div>
    );
};

export default TermsPage;
