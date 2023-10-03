import React, { Fragment } from 'react'

function Sign() {
  return (
   <Fragment>
         <div class="container mt-2 p-4 bg-secondary rounded shadow">
        <h2 className='text-center'>Sign Up</h2>
        <form className='fs-5'git >
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div class="mb-3">
                <label for="tel" class="form-label">Mobile No.</label>
                <input type="tel" class="form-control" id="tel" placeholder="Enter your tel"/>
            </div>
            <div class="mb-3">
                <label for="Password" class="form-label">Password</label>
                <input type="Password" class="form-control" id="Password" placeholder="Enter your Password"/>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="mb-3 btn btn-primary">Submit</button>
            <button type="reset" class="mb-3 ms-3 btn btn-primary">Reset</button>
        </form>
    </div>

   </Fragment>
  )
}

export default Sign

export function SigningIn(){
    return(
        <Fragment>
            <div class="container p-5 rounded mt-5" style={{backgroundColor:'powderblue'}}>
        <h2 className='text-center text-primary fw-bold'>Sign In</h2>
        <form className='fs-5'>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe"/>
                <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
    </div>
        </Fragment>
    )
}