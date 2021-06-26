import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../actions/auth';
import CountDown from './countdown/CountDown';
import Workshops from './homePageWorkshop/Workshops';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <CountDown />
      <Workshops />
    </div>
  );
};

export default Home;
