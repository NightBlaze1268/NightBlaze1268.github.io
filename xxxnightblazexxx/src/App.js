import './App.css';
import { Routes, Route} from "react-router-dom";
import Careers from "./routes/Career";
import Home from "./routes/Home";
import Navbar from './Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}
export default App;