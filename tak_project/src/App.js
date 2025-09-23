import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import './App.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Header />
      <Analytics />
      <Gallery />
    </div>
  );
}

export default App;
