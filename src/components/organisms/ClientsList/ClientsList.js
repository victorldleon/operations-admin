import React, {useState, useEffect} from 'react';
import ClientCard from '../../molecules/ClientCard/ClientCard';
const ClientsList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('https://react-hooks-8fca3-default-rtdb.firebaseio.com/clients.json')
            .then(response => response.json())
            .then(data => {
                const clients = Object.keys(data).map(key => ({
                    ...data[key],
                    id: key
                }));
                setClients(clients);
            })
    }, []);

    return (
        <div>
            {clients.map(client => (
                <ClientCard key={client.id} client={client} />
            ))}
        </div>
    );
};
export default ClientsList;