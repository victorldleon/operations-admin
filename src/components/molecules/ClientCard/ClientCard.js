import React from 'react';
import './ClientCard.css';

const ClientCard = () => {
    return (
        <div className="clientCard">
            <div className="left-content">
                <div className="client-image"></div>
                <h5 className="name">Hitrecord</h5>
            </div>
            <div className="right-content">
                <p className="english-level">
                    Members: <span>9</span>
                </p>
                <a href="../../../logo.svg" className="cv-link" download>Manage</a>
            </div>
        </div>
    );
}
export default ClientCard;