import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Certificates from "./components/Certificates/Certificates";
import Education from "./components/Education/Education";

import PortFolio from "./components/PortFolio/PortFolio";
import Hobbies from "./components/Hobbies/Hobbies";
import TechStack from "./components/Techstack/TechStack";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/portfolio/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
