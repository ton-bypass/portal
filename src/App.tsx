// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import twaLogo from './assets/tapps.png';
// import viteLogo from '/vite.svg'
import './App.css';

import { TonConnectButton } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

function App() {
    return (
        <div className="App">
            <TonConnectButton />
        </div>
    );
}

export default App;
