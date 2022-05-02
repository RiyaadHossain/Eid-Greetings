import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Riyad1 from "../../Image/riyadhoss-removebg-preview.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="App w-full h-[100vh] flex justify-center">
        <div>
          <h2 className="text-green-500 text-center text-2xl font-semibold mt-24">
            Assalamu Walaikum
          </h2>
          <h1 className="text-4xl md:text-5xl text-center font-bold text-orange-600 mt-8 px-3">
            Wanna Get Greetings For Eid?
          </h1>
          <div className="text-center mt-10">
            <button onClick={() => navigate('/yourmsg')} className="home-btn mx-auto">
              <div>
                <span>
                  <p>Yeah, Sure </p>
                </span>
              </div>
              <div>
                <span>
                  <p>Click Me</p>
                  <p>:D</p>
                </span>
              </div>
            </button>
            <div className="mt-24">
              <img
                className="h-40 w-h-40 object-cover mx-auto rounded-full bg-blue-300"
                src={Riyad1}
                alt=""
              />
              <p className="text-white text-center mt-8 font-mono">
                Powered by -
                <span className="text-orange-500 font-semibold">
                  Riyad Hossain
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Home;
