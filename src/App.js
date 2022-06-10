import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./components/Home/ContactMe";
import Details from "./components/Home/Details";
import Home from "./components/Home/Home";
import NavBar from "./components/Home/NavBar";

function App() {
  return (
    <div>
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#contact" element={<ContactMe />} />
        <Route path="/project/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
