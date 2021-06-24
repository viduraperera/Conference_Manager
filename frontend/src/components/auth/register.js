import React, { useState } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
}));

export default function register() {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    contactNo: '',
    role: '',
  });

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
      console.log(user);
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
      <Typography variant="h6" color="textSecondary">
        Register
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Name"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
            setNameError(false);
          }}
          required
          error={nameError}
        />
        <TextField
          className={classes.field}
          label="Email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
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
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
            setPasswordError(false);
          }}
          error={passwordError}
          required
        />
        <TextField
          className={classes.field}
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={rePassword}
          onChange={(e) => {
            setRePassword(e.target.value);
            setPasswordError(false);
          }}
          error={passwordError}
          required
        />
        <TextField
          className={classes.field}
          label="Contact No"
          variant="outlined"
          fullWidth
          value={user.contactNo}
          onChange={(e) => {
            setUser({ ...user, contactNo: e.target.value });
            setContactNoError(false);
          }}
          required
          error={contactNoError}
        />
        <TextField
          className={classes.field}
          label="Role"
          variant="outlined"
          fullWidth
          value={user.role}
          onChange={(e) => {
            setUser({ ...user, role: e.target.value });
            setRoleError(false);
          }}
          required
          error={roleError}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
