import Headers from "./components/Headers.jsx";
import "./components/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
function App() {
  return (
    <>
      <Headers />;
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
