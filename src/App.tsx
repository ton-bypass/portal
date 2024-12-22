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
