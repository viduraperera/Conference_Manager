import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { register as registerUser } from '../../actions/auth';

export default function Register() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    contactNo: '',
    role: '',
  });

  const options = [
    { value: 'attendee', label: 'Attendee' },
    { value: 'researcher', label: 'Researcher' },
    { value: 'workshopPresenter', label: 'Workshop Presenter' },
  ];

  const [rePassword, setRePassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [contactNoError, setContactNoError] = useState(false);
  const [roleError, setRoleError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setContactNoError(false);
    setRoleError(false);
    if (user.name && user.email && user.password && user.contactNo && user.role && user.password === rePassword) {
      dispatch(registerUser({ ...user }));
    } else {
      handleErrors();
    }
  };

  const handleErrors = () => {
    if (!user.password || user.password !== rePassword) {
      setPasswordError(true);
    }
    if (!user.name) {
      setNameError(true);
    }
    if (!user.email) {
      setEmailError(true);
    }
    if (!user.contactNo) {
      setContactNoError(true);
    }
    if (!user.role) {
      setRoleError(true);
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ marginTop: 25 }}>
        <div className="card-body">
          <h2 className="card-title">Register</h2>
          <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={user.name}
                required
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                  setNameError(false);
                }}
              />
              {nameError ? <div className="text-danger">Please enter your name.</div> : ''}
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                required
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
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
                required
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                  setPasswordError(false);
                }}
              />
              {passwordError ? <div className="text-danger">Please enter your password.</div> : ''}
            </div>
            <div className="col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                required
                value={user.password}
                value={rePassword}
                onChange={(e) => {
                  setRePassword(e.target.value);
                  setPasswordError(false);
                }}
              />
              {passwordError ? <div className="text-danger">Please confirm your password.</div> : ''}
            </div>
            <div className="col-md-6">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                required
                value={user.contactNo}
                onChange={(e) => {
                  setUser({ ...user, contactNo: e.target.value });
                  setContactNoError(false);
                }}
              />
              {contactNoError ? <div className="text-danger">Please enter your contact Number.</div> : ''}
            </div>
            <div className="col-md-6">
              <label className="form-label">Register As</label>
              <Select
                options={options}
                onChange={(e) => {
                  setUser({ ...user, role: e.value });
                  setRoleError(false);
                }}
              />
              {roleError ? <div className="text-danger">Please enter your registration type.</div> : ''}
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
