import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const YourName = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    console.log(name);
  return (
    <div className="Your-Name w-full h-[100vh] flex justify-center">
      <div className="pt-40">
        <h2 className="text-4xl font-bold  text-center text-green-500">
          Let me Guess Your Name?
        </h2>
        <div className="mt-6 text-center">
          <span className="text-lg text-white font-semibold">I am</span>{" "}
                  <input
                      onBlur={(e) => setName(e.target.value)}
            className="w-[100px] text-blue-700 font-semibold outline-none rounded py-1 pl-2 mx-2"
            type="text"
          />
          .{" "}
          <span className="text-lg text-white font-semibold">
            , You Forgot me?
          </span>
          <div className="text-center mt-6">
            <button onClick={() => navigate('/wishmsg')} className="ready-btn"> I'M READY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourName;
