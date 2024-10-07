import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to my website</h1>
      <nav>
        <Link to="/about">About</Link> | <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
