import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Homepage } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/" element={<Homepage/>} />
    <Route path="/signin" element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
