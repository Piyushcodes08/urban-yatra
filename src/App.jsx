import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"
import Home from "./pages/Home"

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
<Route path="/" element={<Home/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App