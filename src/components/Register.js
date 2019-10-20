import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';

function Register(props) {
    const {touched, errors, status, handleSubmit, handleChange} = props;
    return(
        
        <form onSubmit={handleSubmit}>
            <h1>Join </h1>
            
        </form>
    )
}

export default withFormik({
    mapPropsToValues: (values) =>{
    return {
        name: values.name || '',
        email: values.email || '',
        password: values.password || '',
        agreement: values.agreement || false

    }
},
validationSchema: yup.object().shape({
    name: yup.string().required('name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
    agreement: yup.boolean().oneOf([true], 'You must agree with our terms and service'),
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