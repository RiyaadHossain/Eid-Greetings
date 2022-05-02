import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import YourName from "./Components/YourName/YourName";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const NameContext = createContext();

function App() {
  const [name, setName] = useState('');

  return (
    <NameContext.Provider value={[name, setName]}>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/yourmsg" element={<YourName />}/>
      </Routes>
    </NameContext.Provider>
  );
}

export default App;
