import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:uid" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
