import React, { useEffect, useState } from 'react';

const CountDown = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });
  //style object
  const MainDiv = {
    backgroundColor: "#cc9057"
  }

  return (
      <div className={"display-5 text-center  p-5 mb-4 rounded-3"} style={MainDiv}>
        <div>
          <h1 className={"display-5 text-light fw-bold"}>Annual Conference {year} Countdown</h1>
          <h3 className={"display-6 text-light fw-bold"}>Conference Starts In:</h3>
          <h2 className={"fs-4 text-light"}>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h2>
        </div>
      </div>
  );
};

export default CountDown;
