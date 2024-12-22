import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

import WebApp from '@twa-dev/sdk';

const manifestUrl = 'https://raw.githubusercontent.com/ton-bypass/manifests/main/tonconnect.json';

WebApp.ready();
WebApp.requestFullscreen();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);
