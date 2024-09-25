import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './Profile.module.css';
import { useForm } from '../../hooks/useForm';
import customerService from '../../api/customerService';

const customerId = '2a2005e4-3a8d-4d56-ab9d-a50160ad8c76';

export default function Profile() {
    const [customerData, setCustomerData] = useState(null); // To store customer data
    const { formValues, changeHandler, setFormValues } = useForm({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        personalIdNumber: '',
        accounts: []
    });

    const [isEmailDisabled, setEmailDisabled] = useState(true);
    const [isPasswordDisabled, setPasswordDisabled] = useState(true);
    const [isAddressDisabled, setAddressDisabled] = useState(true);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Fetch customer data by ID when the component mounts
    useEffect(() => {
        customerService.getCustomerById(customerId)
            .then(response => {
                setCustomerData(response.data); // Assuming response.data holds the customer object
                setFormValues({
                    firstName: response.data.firstName,
                    middleName: response.data.middleName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    personalIdNumber: response.data.personalIdNumber,
                    accounts: response.data.accounts // Set the accounts
                });
            })
            .catch(error => {
                setError('Failed to load customer data.');
                console.error(error);
            });
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Add validation and form submission logic here
        setSuccess('Changes saved successfully!');
    };

    return (
        <div className={styles['profile-wrapper']}>
            <h2 className={styles['profile-title']}>Profile Info</h2>

            {error && (
                <Alert variant="danger" className="mb-3" style={{ maxWidth: '20vw', overflowY: 'auto' }}>
                    {error}
                </Alert>
            )}

            {success && (
                <Alert variant="success" className="mb-3" style={{ maxWidth: '20vw', overflowY: 'auto' }}>
                    {success}
                </Alert>
            )}

            <Form className={styles['profile-form']} onSubmit={handleSubmit}>
                {/* First Name */}
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label className={styles['register-label']}>First Name</Form.Label>
                    <Form.Control value={formValues.firstName} name="firstName" type="text" disabled />
                </Form.Group>

                {/* Middle Name */}
                <Form.Group className="mb-3" controlId="formBasicMiddleName">
                    <Form.Label className={styles['register-label']}>Middle Name</Form.Label>
                    <Form.Control value={formValues.middleName} name="middleName" type="text" disabled />
                </Form.Group>

                {/* Last Name */}
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label className={styles['register-label']}>Last Name</Form.Label>
                    <Form.Control value={formValues.lastName} name="lastName" type="text" disabled />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Email</Form.Label>
                    <Form.Control value={formValues.email} name="email" onChange={changeHandler} type="email" disabled={isEmailDisabled} />
                </Form.Group>

                {/* Additional fields as needed */}

                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Form>
        </div>
    );
}
