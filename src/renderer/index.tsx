import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/react';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: 'Exo 2', sans-serif;
          overflow: hidden;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    window.bridge.removeLoading();
  }
);

// Use ipcRenderer.on
window.bridge.ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args);
});
