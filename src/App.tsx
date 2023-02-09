import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

