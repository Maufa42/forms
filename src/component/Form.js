import { useState} from "react";
import React from 'react'

const Form = (props) => {
//  console.log("FORM COMPONENET",props?.onSubmit)
  const [state,setState] = useState({
    fname: "",
    lname: "",
    cname: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  });
  const set = e =>{
    setState({...state,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(state);
  }

  return (
    <form onSubmit={handleSubmit}>
  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" name="fname" value={state.fname}  id="form6Example1" className="form-control"
            onChange= {set} />
                <label className="form-label" for="form6Example1">First name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form6Example2" name="lname" value={state.lname} className="form-control" onChange= {set} />
                <label className="form-label" for="form6Example2">Last name</label>
              </div>
            </div>
          </div>

          {/* <!-- Text input --> */}
          <div className="form-outline mb-4">
            <input type="text" id="form6Example3" name="cname" value={state.cname} className="form-control" onChange= {set} />
            <label className="form-label" for="form6Example3">Company name</label>
          </div>

          {/* <!-- Text input --> */}
          <div className="form-outline mb-4">
            <input type="text" id="form6Example4" name="address" value={state.address} className="form-control" onChange= {set} />
            <label className="form-label" for="form6Example4">Address</label>
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="email" id="form6Example5" name="email" value={state.email} className="form-control" onChange= {set} />
            <label className="form-label" for="form6Example5">Email</label>
          </div>

          {/* <!-- Number input --> */}
          <div className="form-outline mb-4">
            <input type="number" id="form6Example6" name="phone" value={state.phone} className="form-control" onChange= {set} />
            <label className="form-label" for="form6Example6">Phone</label>
          </div>

          {/* <!-- Message input --> */}
          <div className="form-outline mb-4">
            <textarea className="form-control" id="form6Example7" name="message" value={state.message} rows="4" onChange= {set}></textarea>
            <label className="form-label" for="form6Example7">Additional information</label>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary">Create Account</button>
</form>
  )
}

export default Form