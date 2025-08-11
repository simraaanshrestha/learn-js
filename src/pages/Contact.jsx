import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';


const ContactForm = () => {
  const API = "http://10.10.1.214:5000"
  async function postData(formData) {
    try {
      const response = await fetch(API + "/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });
      if (response.ok){
        const data = await response.json();
        console.log("Data submitted successfully:", data);
        toast.success(data.msg)
      }
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email message').required('Required'),
    }),
    onSubmit:  async values  => {
      await postData(values);
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="contactss">
      <h1>Contact Us</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}


        <label htmlFor="email">Email message</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="message">Message</label>
        <input type="text"
          name='message'
          id='message'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactForm;