import React from 'react';
import './Products.css';

const Products = () => {
    return (
        <div className="ecom-product">
            <div className="filters-section col-md-3">
                {/* <div> FILTERS </div> */}
                <div className="categories-block">
                    BRAND
                    <ul>
                        <li>ABC</li>
                        <li>ABC</li>
                        <li>ABC</li>
                    </ul>

                </div>
                <div className="categories-block">
                    PRICE
                    <ul>
                        <li>ABC</li>
                        <li>ABC</li>
                        <li>ABC</li>
                    </ul>

                </div>
                <div className="categories-block">
                    COLOR
                    <ul>
                        <li>ABC</li>
                        <li>ABC</li>
                        <li>ABC</li>
                    </ul>

                </div>
            </div>
            <div className="col-md-9">
                Filtersssss
        </div>
        </div>
    );

}

export default Products;