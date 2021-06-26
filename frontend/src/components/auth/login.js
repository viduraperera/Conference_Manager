import React, { useState } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { login as loginUser } from '../../actions/auth';

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
}));

export default function login() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    if (email && password) {
      dispatch(loginUser({ email, password }));
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
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              className={classes.field}
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              required
              error={emailError}
            />
            <TextField
              className={classes.field}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              error={passwordError}
              required
            />
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
