import React, { useState } from 'react';
import './Customers.css';

const Customers = () => {
    // Sample customer data
    const [customers, setCustomers] = useState([
        { id: 1, name: 'John Doe', email: 'john@gmail.com', phone: '9812347890' },
        { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '98123456789' },
        { id: 3, name: 'Taylor Swift', email: 'taylor@gmail.com', phone: '9887654321' },
        { id: 4, name: 'Anita Ambani', email: 'anita@gmail.com', phone: '98246813579' },
        { id: 5, name: 'Raynold Johnson', email: 'raynold@gmail.com', phone: '98123459876' },
        { id: 6, name: 'Marie Curie', email: 'marie@gmail.com', phone: '98192837465' },
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
