import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Careers from "./routes/Career";
import Home from "./routes/Home";
import Navbar from './Navbar';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
