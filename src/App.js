import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
// import Login from './components/Auth';
// import Dashboard from './components/Dashboard'
import Routes from './components/routes'

function App() {
  return (
    <Provider store={store} className="App">
      <Routes/>
    </Provider>
  );
}

export default App;
