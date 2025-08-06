import React from 'react'
import { toast } from 'react-toastify';


const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname = e.target.fname.value;
        const lastname = e.target.lname.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const date = e.target.date.value;
        const pass = e.target.pass.value;
        const cpass = e.target.cpass.value;
        console.log(firstname, lastname, email, phone, address, date, pass, cpass);
        if(pass !== cpass)
        {
            // alert("Password and Confirm Password do not match");
            toast.error("Password and Confirm Password do not match");
        }
        // else {
        //     alert("Form submitted successfully");
        // }
        if(pass.length<8){
            // alert("Password must be at least 8 characters long");
            toast.error("Password must be at least 8 characters long");
            return;
        }
        if(firstname.length <4){
            // alert("First name must be at least 4 characters long");
            toast.error("First name must be at least 4 characters long");
            return;
        }
        const data = new Date(date).getFullYear()
        const today = new Date().getFullYear()
        const age = today - data;
        if(age < 18){
            // alert("You must be at least 18 years old to register");
            toast.error("You must be at least 18 years old to register");
            return;
        }
        // alert("Form submitted successfully");
        toast.success("Form submitted successfully");
        // toast.error("There is an error message");

    };
  return (
<>
<div className="form">

 <h1 style={{color:"white"}}>Registration</h1>
      <form onSubmit={handleSubmit} action="">
        <span><input type="text" name='fname' placeholder='First Name' /> 
        <input type="text" placeholder='Last Name' name='lname' /><br /><br />
        <input type="email" name="email"  id="" placeholder='Email' />
        <input type="text" placeholder='Phone' name='phone'/><br /><br />
      <input type="text" placeholder='Address' className='add'name='address' /><br /><br />
        <input type="date" placeholder='dd/mm/yy' name='date'/>
        <input type="password" placeholder='Enter your password'name='pass' /><br /><br />
        <input type="password" placeholder='Confirm password'name='cpass' /><br /><br />
        </span>
      <span>
        <span className="g">
        <input type="radio" name='g' /><span className="n">Male</span>
        <input type="radio" name='g' /><span className="n">Female</span>
        </span> <br /><br />
      <input type="submit" value="Submit" className='submit'/>
      </span>
        
      </form>
</div>
</>
  )
}

export default Form