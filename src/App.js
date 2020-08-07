import React from 'react';
import './App.scss';
import Homepage from './components/Homepage'
import SidebarNav from './components/sidebar-folder/SidebarNav'

function App() {
  return (
    <div className="App">
      <SidebarNav />
      <Homepage />
    </div>
  );
}

export default App;