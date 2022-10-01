import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Main/login";

import './Style/reset.css'
import './Style/style.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

