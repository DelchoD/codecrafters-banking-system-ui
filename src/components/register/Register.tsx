import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Register.module.css';

import { useForm } from "../../hooks/useForm";


const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    personalIdNumber: '',
    address: '',
    dateOfBirth: ''
};

export default function Register() {

    const { formValues, changeHandler } = useForm(initialValues);


    return (

        <div className={styles['register-wrapper-div']}>

            <h2 className={styles['register-title']}>Register</h2>

            <Form className={styles['register-form']}>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>First Name</Form.Label>
                    <Form.Control value={formValues.firstName} onChange={changeHandler} name="firstName" type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Middle Name</Form.Label>
                    <Form.Control value={formValues.middleName} onChange={changeHandler} name="middleName" type="text" placeholder="Enter middle name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Last Name</Form.Label>
                    <Form.Control value={formValues.lastName} onChange={changeHandler} name="lastName" type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Email address</Form.Label>
                    <Form.Control value={formValues.email} onChange={changeHandler} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles['register-label']}>Password</Form.Label>
                    <Form.Control value={formValues.password} onChange={changeHandler} name="password" type="password" placeholder="Enter password" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles['register-label']}>Confirm Password</Form.Label>
                    <Form.Control value={formValues.rePassword} onChange={changeHandler} name="rePassword" type="password" placeholder="Enter password" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Personal ID Number</Form.Label>
                    <Form.Control value={formValues.personalIdNumber} onChange={changeHandler} name="personalIdNumber" type="text" placeholder="Enter Personal ID Number" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Date Of Birth</Form.Label>
                    <Form.Control value={formValues.dateOfBirth} onChange={changeHandler} name="dateOfBirth" type="date" placeholder="Enter Date Of Birth" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['register-label']}>Address</Form.Label>
                    <Form.Control value={formValues.address} onChange={changeHandler} name="address" type="text" placeholder="Enter address" />
                </Form.Group>


                <Button className={styles['register-btn']} variant="primary" type="submit">
                    Register
                </Button>
            </Form >

        </div>
    )

}


