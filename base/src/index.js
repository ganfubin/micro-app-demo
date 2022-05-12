import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';

ReactDOM.render(<App />, document.getElementById('root'));

registerMicroApps([
  {
    name: 'vue',
    entry: '//localhost:3001',
    container: '#app',
    activeRule: '/vue',
  },
  {
    name: 'react',
    entry: '//localhost:3002',
    container: '#app',
    activeRule: '/react',
  },
]);

start();
