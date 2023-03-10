import React, { useEffect, useState } from "react";

export default function DODsection() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTImerSeconds] = useState();

  let interval;
  const startTime = () => {
    const countDownDate = new Date("dec 31,2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;
      const days = Math.floor(difference / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (difference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((difference % (60 * 1000)) / 1000);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTImerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTime();
  });
  return (
    <div className="dod-section">
      <div className="dod-section__content">
        <div className="dod-section__content__img-section">
          <img
            src="https://varkala-react-2.vercel.app/_next/image?url=%2Fimg%2Fphoto%2Fdeal-plain.jpg&w=1920&q=75"
            alt="background image"
            className="dod-section__content__img-section-img"
          />
        </div>
        <div className="dod-section__content__offer_section">
          <h3 className="dod-section__content__offer_section-heading">
            DEAL OF THE WEEK
          </h3>
          <h1 className="dod-section__content__offer_section-subheading">
            Oversized denim jacket
          </h1>
          <p className="dod-section__content__offer_section-price-section">
            <span>
              <del>$129.00</del>
            </span>
            <span style={{ marginLeft: "10px" }}> $79.00</span>
          </p>
          <p className="dod-section__content__offer_section-offer-badge">
            <span>$50% off</span>
          </p>
          {/* count down section */}
          <div className="dod-section__content__offer_section__countdown-section">
            <div className="dod-section__content__offer_section__countdown-section__container">
              <div className="dod-section__content__countdown-section__container__sub-container">
                <h6>{timerDays}</h6>
                <span>days</span>
              </div>
              <div>
                <h6>{timerHours}</h6>
                <span>hours</span>
              </div>
              <div>
                <h6>{timerMinutes}</h6>
                <span>minutes</span>
              </div>
              <div>
                <h6>{timerSeconds}</h6>
                <span>seconds</span>
              </div>
            </div>
          </div>
          <div className="dod-section__content__offer_section__countdown-section__button">
            <button className="">shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
