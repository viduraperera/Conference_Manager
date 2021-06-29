import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import { login as loginUser } from '../../actions/auth';

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
        history.push('/')
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
      <div className="card" style={{ marginTop: 25 }}>
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
              />
              {emailError ? <div className="text-danger">Please enter your email.</div> : ''}
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
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
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
