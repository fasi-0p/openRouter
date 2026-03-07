import type {App} from "app"
import "./index.css"
import {treaty} from "@elysiajs/eden"
import {BrowserRouter, Route, Routes} from "react-router"
import {Signin} from "./pages/Signin"
import {Signup} from "./pages/Signup"
import {Dashboard} from "./pages/Dashboard"
import {Credits} from "./pages/Credits"
import {ApiKeys} from "./pages/ApiKeys"
import {Landing} from "./pages/Landing"


export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/api-keys" element={<ApiKeys />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
