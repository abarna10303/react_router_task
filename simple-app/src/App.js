import "./App.css";
import Login from "./Login/Login";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { context } from "./Context/Context";
import { Redusers, initialState } from "./Context/StateReduser";
import { useReducer } from "react";
import Addtask from "./Task/Addtask";
function App() {
  const [state, dispatch] = useReducer(Redusers, initialState);
  return (
    <div>
      <context.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Login />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Task" element={<Addtask />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
