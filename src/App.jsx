import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MuseuPesca from "./pages/MuseuPesca"
import MuseuCafe from "./pages/MuseuCafe"
import Login from "./pages/Login"
import Cadastrar from "./pages/Cadastrar"



function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/museupesca" element={<MuseuPesca />} />
          <Route path="/museupesca" element={<MuseuPesca />} />
          <Route path="/museucafe" element={<MuseuCafe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
