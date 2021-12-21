import React from "react";
import { Header } from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="intro  flex-with-center"
        style={{ backgroundImage: `url('./bg.svg')` }}
      >
        <div>
          <h1> SAIF ALJANAHI</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              Flutter & React & Django <br /> Engineer, Developer
            </p>
            <button className="primary-button font-bold">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
