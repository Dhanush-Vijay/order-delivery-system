import React from 'react';
import './App.css';
import LoginPage from './components/LoginComponent';
import HeadersComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        < HeadersComponent />
      </header>
      <LoginPage />
      <footer>
        <FooterComponent />
      </footer>
    </div>
  )
  }

export default App
