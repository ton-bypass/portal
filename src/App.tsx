import { useState } from 'react';
import reactLogo from './assets/react.svg';
import twaLogo from './assets/tapps.png';
// import viteLogo from '/vite.svg'
import './App.css';

import { TonConnectButton } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="Container">
                <TonConnectButton />
                <div className="card">
                    <b>{WebApp.platform}</b>
                </div>
                <a href="https://ton.org/dev" target="_blank">
                    <img src={twaLogo} className="logo" alt="TWA logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1>TWA + Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                </div>
            </div>
        </div>
    );
}

export default App;
