import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MuseuPesca from "./pages/MuseuPesca"
import MuseuCafe from "./pages/MuseuCafe"


function App() {


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/museupesca" element={<MuseuPesca />} />
          <Route path="/museupesca" element={<MuseuPesca />} />
          <Route path="/museucafe" element={<MuseuCafe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
