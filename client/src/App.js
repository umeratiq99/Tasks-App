import "./App.css";
import { Fragment, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Front from "./components/LandingPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import NotFound from "./components/NotFoundPage";
import Listtask from "./components/Listtasks";
import ProtectedRoute from "../src/ProtectedRoute";
export const MyContext = createContext();
function App() {
  const [count, setCount] = useState(true);
  return (
    <Fragment>
      <div className="container">
        <MyContext.Provider value={{count,setCount}}>
          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Listtask />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MyContext.Provider>
      </div>
    </Fragment>
  );
}

export default App;
