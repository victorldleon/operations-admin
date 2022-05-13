import React from 'react';
import './ClientCard.css';

const ClientCard = props => {
    return (
        <div className="clientCard">
            <div className="left-content">
                <div className="client-image"></div>
                <h5 className="name">{props.client.name}</h5>
            </div>
            <div className="right-content">
                <p className="detail">
                   Responsable: <b>{props.client.responsible}</b>
                </p>
                <a href="../../../logo.svg" className="cv-link" download>Manage</a>
            </div>
        </div>
    );
}
export default ClientCard;