import './App.css';
import { Routes, Route } from "react-router-dom";
import Careers from "./routes/Career";
import Home from "./routes/Home";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  // Wrapped Home with JSX
        <Route path="/career" element={<Careers />} /> // Wrapped Careers with JSX
      </Routes>
    </>
  );
}

export default App;
