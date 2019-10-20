import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Button } from '@material-ui/core'

function Register(props) {
    const {touched, errors, status, handleSubmit} = props;
    const [users, setUsers] = useState([])
    useEffect(() => {
        if (status) {
            setUsers([...users, status])
        }
    },[status])
    return(
        
        <Form onSubmit={handleSubmit}>
            <h1>Join </h1>
            {touched.firstName && errors.FirstName && <p className="error">{errors.FirstName}</p>}
            <Field type="text" 
                    name="firstName"
                    className="Field"   
                    placeholder="First Name" />

            {touched.lastName && errors.lastName && <p className="error">{errors.lastName}</p>}
            <Field type="text" 
                    name="lastName" 
                    className="Field"
                    placeholder="Last Name" />

            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            <Field type="email" 
                    name="email"
                    className="Field" 
                    placeholder="Email" />

            {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
            <Field type="text" 
                    name="phone" 
                    className="Field"
                    placeholder="Cell Phone" />

            {touched.textConfirm && errors.textConfirm && <p className="error">{errors.textConfirm}</p>}
            <Field name="textConfirm" 
                    component="select" 
                    className="Fields"
                    placeholder="Can you recieve text">
                    <option value="" disabled>Can you recieve text?</option> 
                    <option value="yes">Yes</option>
                    <option value="no">No</option>                     
            </Field>

            <Button type="submit">Submit</Button>

            {users.map((user) => {
                return <div>Welcome: {user.name} </div>
            })}
            
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) =>{
    return {
        firstName: values.firstName || '',
        lastName: values.lastName || '',
        phone: values.phone || '',
        email: values.email || '',
        password: values.password || '',
        agreement: values.agreement || false,
        textConfirm: values.textConfirm,

    }
},
validationSchema: yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('First name is required'),
    phone: yup.string().required('Mobile number is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
    agreement: yup.boolean().oneOf([true], 'You must agree with our terms and service'),
    textConfirm: yup.boolean().oneOf([true], 'Please select an option'),
}),
handleSubmit: (values, {setStatus}) => {
    axios.post('https://reqres.in/api/users',values)
    
    .then((res) => {
        
        setStatus(res.data)
    })
    .catch((err) => {
        console.log('Error:', err)
    })
   
},

})(Register)