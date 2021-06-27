import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../actions/auth';
import CountDown from './countdown/CountDown';
import Workshops from './homePageWorkshop/Workshops';
import Research from "./homePageResearch/Research";

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
      <Research/>
    </div>
  );
};

export default Home;
