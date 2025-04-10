import React, { useState } from 'react';
import './Customers.css';

const Customers = () => {
    // Sample customer data
    const [customers, setCustomers] = useState([
        { id: 1, name: 'John Doe', email: 'john@gmail.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '234-567-8901' },
        { id: 3, name: 'Taylor Swift', email: 'taylor@gmail.com', phone: '345-678-3567' },
        { id: 3, name: 'Anita Ambani', email: 'anita@gmail.com', phone: '367-123-5621' },
        { id: 3, name: 'Raynold Johnson', email: 'raynold@gmail.com', phone: '983-042-9012' },
        { id: 3, name: 'Marie Curie', email: 'marie@gmail.com', phone: '245-788-0642' },
    ]);

    // Handle customer deletion
    const deleteCustomer = (customerId) => {
        setCustomers(customers.filter(customer => customer.id !== customerId));
    };

    // Delete button component
    const DeleteButton = ({ onDelete }) => {
        return (
            <button className="delete-btn" onClick={onDelete}>
                Delete
            </button>
        );
    };

    return (
        <div className="customers-dashboard">
            <h1>Customer Management</h1>
            <div className="customer-table-container">
                <table className="customer-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>
                                    <DeleteButton onDelete={() => deleteCustomer(customer.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customers;
