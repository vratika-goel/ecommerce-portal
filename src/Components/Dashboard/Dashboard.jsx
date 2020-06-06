import React from 'react';
import './Dashboard.css';

import Header from '../Header/Header';

const Dashboard = () => {
    return (
        <div className="container ecom-wrapper">
            <div className="row header-wrapper">
                <Header />
            </div>
            <div className="row body-wrapper">
                Page
            </div>
        </div>
    );
}

export default Dashboard;