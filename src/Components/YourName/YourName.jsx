import React, { useContext } from "react";
import toast from "react-hot-toast";
import { NameContext } from "../../App";

const YourName = () => {
  const [name, setName] = useContext(NameContext);
  const readyBtn = (e) => {
    const yourName = e.target.value;
    if (yourName) {
      setName(e.target.value);
    } else {
      toast.error("Plase Type You Name 😒", { id: "test" });
    }
  };
  return (
    <div
      className={`${
        name ? "wish-bg" : "Your-Name"
      } w-full h-[100vh] flex justify-center`}
    >
      {name ? (
        <div className="flex justify-center pt-40">
          <div>
            {" "}
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-500 font-mono">
              Absolute Not, {name}
            </h1>
            <div className="mt-12 border border-cyan-500 bg-slate-200 card w-[400px] h-60 rounded-md flex items-center justify-center p-5">
              <p className="text-white text-center text-lg">No matter where you are or what you are doing, remember that Allah is always with you to help and guide you in every important step of your life. Eid Mubarak!</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-40">
          <h2 className="text-4xl font-bold  text-center text-green-500">
            Let me Guess Your Name?
          </h2>
          <div className="mt-6 text-center">
            <span className="text-lg text-white font-semibold">I am</span>{" "}
            <input
              onBlur={(e) => setName(e.target.value)}
              className="w-[130px] text-blue-700 font-semibold outline-none rounded py-1 pl-2 mx-2"
              type="text"
              placeholder="Type You Name"
            />
            .{" "}
            <span className="text-lg text-white font-semibold">
              , You Forgot me?
            </span>
            <div className="text-center mt-6">
              <button onClick={readyBtn} className="ready-btn">
                {" "}
                I'M READY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourName;
