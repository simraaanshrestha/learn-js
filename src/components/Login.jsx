import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './Login.css'; 
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
    const formik = useFormik({
    initialValues: {
      username: '',
      pass: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      pass: Yup.string()
        .max(20, 'Must be 7 characters or less')
        .required('Required'),
    //   email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login">
        <div className="photo">
            <img className='profile' src="https://imgs.search.brave.com/h3D8EHrZZbFjWtJccStABBnOtFwDFGaedIW-PKZWHrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzExLzc2/L2RmLzExNzZkZmE1/YmFmN2Q4Njk1MmRk/YjIzZGQ0MzcxZjg3/LmpwZw" alt="" style={{objectFit:"cover"}}/>
        </div>
        <h1>Simran Shrestha</h1>
        <form action="" onSubmit={formik.handleSubmit}>
            <FaUser />
            <input 
            type="text" 
            placeholder='Username' 
            name='username'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
        <div className='error'>{formik.errors.username}</div>
      ) : null}

            <RiLockPasswordFill />
            <input type="password"
             placeholder='Password'
              name='pass' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                value={formik.values.pass}
              />
              {formik.touched.pass && formik.errors.pass ? (
        <div className='error'>{formik.errors.pass}</div>
      ) : null}

            <button type="submit">Login</button>
            <a href="">Forgrt Username / Password?</a>
        </form>
    </div>
)
}

export default Login