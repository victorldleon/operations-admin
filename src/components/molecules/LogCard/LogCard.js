import React from 'react';
import './LogCard.css';

const LogCard = () => {
    return (
        <div className="LogCard">
            <div className="left-content">
                <h5 className="name">Victor Lopez</h5>
                <p className="client">
                    cliente: <b>Hitrecord</b>
                </p>
            </div>
            <div className="right-content">
                <p className="detail">
                   inicio: <span>mayo 2019</span>
                </p>
                <p className="detail">
                    fin: <span>diciembre 2023</span>
                </p>
            </div>
        </div>
    );
}
export default LogCard;