import React, { Fragment } from 'react'
import {useForm} from 'react-hook-form';





const myarray=[];
function Sign() {
    const{register, handleSubmit,formState:{errors}}=useForm();
    const mysubmit=(alldata)=>{
        console.log(typeof(alldata))
        myarray.push(alldata)
    localStorage.setItem('userdatas',JSON.stringify(myarray))
    }
  return (
   <Fragment>
         <div className="container mt-2 p-4 bg-secondary rounded shadow">
        <h2 className='text-center'>Sign Up</h2>
        <form className='fs-5' onSubmit={handleSubmit(mysubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" {...register("Name",{required:true})} placeholder="Enter your name"/>
                {errors.Name && <span className='text-white fw-semibold'>Full Name Required</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" {...register("Email")} placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tel" className="form-label">Mobile No.</label>
                <input type="tel" className="form-control" id="tel" {...register("Mobile")} placeholder="Enter your tel"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Password" className="form-label">Password</label>
                <input type="Password" className="form-control" id="Password" {...register("Password")} placeholder="Enter your Password"/>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" defaultValue={"type-text"} {...register("Message")} placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="mb-3 btn btn-primary">Submit</button>
            <button type="reset" className="mb-3 ms-3 btn btn-primary">Reset</button>
        </form>
    </div>

   </Fragment>
  )
}

export default Sign

export function SigningIn(){
    return(
        <Fragment>
            <div className="container p-5 rounded mt-5" style={{backgroundColor:'powderblue'}}>
        <h2 className='text-center text-primary fw-bold'>Sign In</h2>
        <form className='fs-5'>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your username"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
    </div>
        </Fragment>
    )
}