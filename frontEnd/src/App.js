import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Registration from "./Components/Registration";
import StudentsData from "./Components/StudentsData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Registration />} />
        <Route path="/viewData" exact element={<StudentsData />} />
      </Routes>
    </div>
  );
}

export default App;
