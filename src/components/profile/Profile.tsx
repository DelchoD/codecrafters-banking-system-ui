import { useState, useRef, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './Profile.module.css';
import { useForm } from '../../hooks/useForm';
import customerService from '../../api/customerService';

const customerId = '2a2005e4-3a8d-4d56-ab9d-a50160ad8c76';

export default function Profile() {
    const { formValues, setFormValues, changeHandler } = useForm({}); // Initialize with an empty object
    const [isEmailDisabled, setEmailDisabled] = useState(true);
    const [isPasswordDisabled, setPasswordDisabled] = useState(true);
    const [isAddressDisabled, setAddressDisabled] = useState(true);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        customerService.getCustomerById(customerId)
            .then(response => {
                setFormValues({
                    firstName: response.data.firstName,
                    middleName: response.data.middleName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    password: '', // No password fetched from the server for security
                });
            })
            .catch(error => {
                setError('Failed to load customer data.');
                console.error(error);
            });
    }, [setFormValues]);

    const handleEditClick = (
        event: React.MouseEvent<HTMLButtonElement>,
        setDisabled: React.Dispatch<React.SetStateAction<boolean>>,
        ref: React.RefObject<HTMLInputElement>
    ) => {
        event.preventDefault();
        setDisabled(false);
        ref.current?.focus();
    };

    const validateForm = () => {
        let valid = true;
        setError('');

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formValues.email)) {
            setError((prev) => `${prev}\nInvalid email format.`);
            valid = false;
        }

        // Password validation (example: must be at least 6 characters)
        if (formValues.password.length < 6) {
            setError((prev) => `${prev}\nPassword must be at least 6 characters.`);
            valid = false;
        }

        // Address validation (example: cannot be empty)
        if (!formValues.address.trim()) {
            setError((prev) => `${prev}\nAddress cannot be empty.`);
            valid = false;
        }

        return valid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validateForm()) {
            setSuccess('Changes saved successfully!');
            setError('');

            // Call the API to update customer details
            const updatedData = {
                firstName: formValues.firstName,
                middleName: formValues.middleName,
                lastName: formValues.lastName,
                email: formValues.email,
                personalIdNumber: '',
                address: formValues.address,
            };

            customerService.updateCustomer(customerId, updatedData)
                .then(() => {
                    setSuccess('Profile updated successfully!');
                })
                .catch(err => {
                    setError('Failed to update profile.');
                    console.error(err);
                });
        } else {
            setSuccess('');
        }
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
                    <Form.Control value={formValues.firstName || ''} name="firstName" type="text" disabled />
                </Form.Group>

                {/* Middle Name */}
                <Form.Group className="mb-3" controlId="formBasicMiddleName">
                    <Form.Label className={styles['register-label']}>Middle Name</Form.Label>
                    <Form.Control value={formValues.middleName || ''} name="middleName" type="text" disabled />
                </Form.Group>

                {/* Last Name */}
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label className={styles['register-label']}>Last Name</Form.Label>
                    <Form.Control value={formValues.lastName || ''} name="lastName" type="text" disabled />
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3 field-with-btn" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Email address</Form.Label>
                    <div className={styles['input-btn-container']}>
                        <Form.Control
                            type="text"
                            value={formValues.email || ''}
                            name="email"
                            onChange={changeHandler}
                            placeholder="Edit email"
                            disabled={isEmailDisabled}
                            ref={emailRef}
                        />
                        <Button
                            variant="primary"
                            onClick={(e) => handleEditClick(e, setEmailDisabled, emailRef)}
                            className={styles['edit-btn']}
                        >
                            Edit
                        </Button>
                    </div>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-3 field-with-btn" controlId="formBasicPassword">
                    <Form.Label className={styles['form-label']}>Password</Form.Label>
                    <div className={styles['input-btn-container']}>
                        <Form.Control
                            value={formValues.password || ''}
                            name="password"
                            onChange={changeHandler}
                            type="password"
                            placeholder="Edit password"
                            disabled={isPasswordDisabled}
                            ref={passwordRef}
                        />
                        <Button
                            variant="primary"
                            onClick={(e) => handleEditClick(e, setPasswordDisabled, passwordRef)}
                            className={styles['edit-btn']}
                        >
                            Edit
                        </Button>
                    </div>
                </Form.Group>

                {/* Address Field */}
                <Form.Group className="mb-3 field-with-btn" controlId="formBasicAddress">
                    <Form.Label className={styles['form-label']}>Address</Form.Label>
                    <div className={styles['input-btn-container']}>
                        <Form.Control
                            value={formValues.address || ''}
                            name="address"
                            onChange={changeHandler}
                            type="text"
                            placeholder="Edit address"
                            disabled={isAddressDisabled}
                            ref={addressRef}
                        />
                        <Button
                            variant="primary"
                            onClick={(e) => handleEditClick(e, setAddressDisabled, addressRef)}
                            className={styles['edit-btn']}
                        >
                            Edit
                        </Button>
                    </div>
                </Form.Group>

                <Button className={styles['profile-btn']} variant="primary" type="submit">
                    Save Changes
                </Button>
            </Form>
        </div>
    );
}
