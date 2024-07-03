import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index, callback) => {
        setActiveTab(index);
        if (callback) callback();
    };

    return (
        <div className="tabs">
            <div className="tab-headers">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-header ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index, tab.callback)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};
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

export default Tabs;
