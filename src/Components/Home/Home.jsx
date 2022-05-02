import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="App w-full h-[100vh] flex justify-center">
        <div>
          <h1 className="text-5xl font-bold text-orange-600 mt-56">
            Wanna Get Wished?
          </h1>
          <div className="text-center mt-10">
            <button onClick={() => navigate('/yourname')} className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;Of Curse&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;Click&nbsp;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
