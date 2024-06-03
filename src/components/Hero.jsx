import React from "react";

const Hero = () => {
  return (
    <section className="hero container d-flex align-items-center justify-content-center flex-wrap">
      <div className="flex-grow-1">
        <h2>
          You can feel <span className="orange">fashion</span> sense
        </h2>
      </div>
      <div className="flex-grow-1">
        <p>Find the best products here!</p>
        <div className="d-flex gap-2 align-items-center justify-content-center flex-wrap">
          <button className="button-orange">Shop Now</button>
          <button className="button-orange">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
