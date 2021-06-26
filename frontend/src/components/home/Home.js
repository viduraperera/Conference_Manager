import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../actions/auth';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <h1>Home Page</h1>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
};

export default Home;
