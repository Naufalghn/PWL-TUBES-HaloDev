import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages';
import Kelas from './pages/kelas';
import Profil from './pages/profil';
import Daftar from './pages/daftar';
import Masuk from './pages/masuk';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/kelas" element={<Kelas />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/masuk" element={<Masuk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;