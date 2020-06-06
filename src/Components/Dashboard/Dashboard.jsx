import React from 'react';
import './Dashboard.css';

import Header from '../Header/Header';
import Products from '../Products/Products';

const Dashboard = () => {
    return (
        <div className="container ecom-wrapper">
            <div className="row header-wrapper">
                <Header />
            </div>
            <div className="row body-wrapper">
                <Products />
            </div>
        </div>
    );
}

export default Dashboard;