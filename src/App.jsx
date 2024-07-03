import React from 'react';
import Tabs from './Tabs';
import './App.css';

const App = () => {
  const tabs = [
    { 
      label: 'Tab 1', 
      content: 'Contenido de la Pestaña 1',
      callback: () => console.log('Pestaña 1 clickeada')
    },
    { 
      label: 'Tab 2', 
      content: 'Contenido de la Pestaña 2',
      callback: () => console.log('Pestaña 2 clickeada')
    },
    { 
      label: 'Tab 3', 
      content: 'Contenido de la Pestaña 3',
      callback: () => console.log('Pestaña 3 clickeada')
    },
  ];

  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
