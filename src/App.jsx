import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApartmentDetails from "./pages/ApartmentDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/apartment/:id"
          element={<ApartmentDetails />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;