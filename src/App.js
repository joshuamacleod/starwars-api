import { Routes, Route } from "react-router-dom";
import API from "./components/API" 
import HomeWorldDetails from "./components/HomeWorldDetails"
import "./App.css"

const App = () => {
  return (
    <div>
          <Routes>
              <Route 
              path="/" 
              element={<API />} />
              <Route 
              path="/homeworld" 
              element={<HomeWorldDetails />} />
          </Routes>
    </div>
  );
};

export default App;