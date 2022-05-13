import React from 'react';
import { Link } from "react-router-dom";
import ClientsList from '../../components/organisms/ClientsList/ClientsList';

const ClientsPage = () => {
    return (
        <div>
            <div className="sub-header">
                <h1>Clients</h1>
                <Link to="/clients/new"className="row" >
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#fff" />
                    </svg>
                <p>New Client</p>
                </Link>
            </div>
            <ClientsList />
        </div>
    );
}
export default ClientsPage;