import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import { login as loginUser } from '../../actions/auth';
import { ROLES } from '../../constants/constants';

export default function Login() {
  const history = useHistory();
  const { addToast } = useToasts();

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (email && password) {
      const res = await dispatch(loginUser({ email, password }));
      if(res.status === 200){
        addToast('Logged in  Successfully', { appearance: 'success', autoDismiss: true, });
        if(res?.data?.payload?.user?.role === ROLES.USER.ATTENDEE){
          history.push('/payment')
        }else {
          history.push('/')
        }
      } else {
        addToast('Login Error', { appearance: 'error', autoDismiss: true, });
      }
      setEmail('')
      setPassword('')
    } else {
      handleErrors();
    }
  };

  const handleErrors = () => {
    if (!password) {
      setPasswordError(true);
    }

    if (!email) {
      setEmailError(true);
    }
  };

  return (
    <div className="container">
      <div className="rounded border p-5 bg-light w-75 d-flex flex-column mx-auto" style={{ marginTop: 25 }}>
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="row justify-content-center">
            <div className="col">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                placeholder="abc@sliit.lk"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
              />
              {emailError ? <div className="text-danger">Please enter your email.</div> : ''}
            </div>
            </div>
            <div className="row justify-content-center">
            <div className="col ">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
              />
              {passwordError ? <div className="text-danger">Please enter your password.</div> : ''}
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary col-md-4 mx-auto">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
