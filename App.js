import React, { useState } from 'react';
import Popup from './Popup';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="App">
            <button onClick={togglePopup}>Click</button>
            {isOpen && <Popup
                handleClose={togglePopup}
                content={<div>
                    <p>The information provided by Nanny Express Service LLC. on nannydeal.com is for general public informational purpose only. We make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validaity, reliability, availability or completeness of any information on the nannydeal.com.
                    </p>
                    <p>Nannydeal.com is an online website for sharing home-related service experience. Nannydeal.com do not endorse, represent, support or guarantee the accuracy, completeness or reliability of any content or communications posted on this website. In no event shall Nannydeal.com be liable for any loss or damage including without limitation, indirect or consequential loss or damage from using this website.
                    </p>
                    <h2>What are the cookies used for?</h2>
                    <p>Cookies could be used to recognize you when you visit Nannydeal.com, remember your preference, and give you personalized experience that’s in line with your setting. Cookies also make your interactions with Nannydeal.com faster and more secure.
                    </p>
                    <img src={require('./123.jpg')} />
            </div>}

        />}
    </div>
    );
}

export default App;