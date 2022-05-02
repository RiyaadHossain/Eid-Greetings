import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import WishMsg from "./Components/WishMsg/WishMsg";
import YourName from "./Components/YourName/YourName";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/yourname" element={<YourName />}/>
        <Route path="/wishmsg" element={<WishMsg />}/>
      </Routes>
    </div>
  );
}

export default App;
