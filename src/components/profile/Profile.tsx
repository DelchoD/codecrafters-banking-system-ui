import { Form, Button } from 'react-bootstrap';
import styles from './Profile.module.css';

import { useForm } from '../../hooks/useForm';



const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    address: ''
};


export default function Profile() {


    const { formValues, changeHandler } = useForm(initialValues);


    return (

        <div className={styles['profile-wrapper']}>

            <h2 className={styles['profile-title']}>Edit Profile Info</h2>

            <Form className={styles['profile-form']}>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>First Name</Form.Label>
                    <Form.Control value={formValues.firstName} onChange={changeHandler} name="firstName" type="text" placeholder="Edit first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Middle Name</Form.Label>
                    <Form.Control value={formValues.middleName} onChange={changeHandler} name="middleName" type="text" placeholder="Edit middle name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Last Name</Form.Label>
                    <Form.Control value={formValues.lastName} onChange={changeHandler} name="lastName" type="text" placeholder="Edit last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Email address</Form.Label>
                    <Form.Control type="text" value={formValues.email} name="email" onChange={changeHandler} placeholder="Edit email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles['form-label']}>Password</Form.Label>
                    <Form.Control value={formValues.password} name="password" onChange={changeHandler} type="password" placeholder="Edit password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles['form-label']}>Address</Form.Label>
                    <Form.Control value={formValues.address} name="address" onChange={changeHandler} type="address" placeholder="Edit address" />
                </Form.Group>


                <Button className={styles['profile-btn']} variant="primary" type="submit">
                    Edit
                </Button>
            </Form>

        </div>
    )
}