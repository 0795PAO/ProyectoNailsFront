import { Navigate, Route, Routes } from "react-router-dom";
import Layaut from "./components/layaut/Layaut";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Ofertadelmes from "./pages/Ofertadelmes";
import Reservar from "./pages/Reservaronline";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <div className="bg-secondary min-h-screen flex flex-col bg-no-repeat bg-center" style={{backgroundColor: "pink"}}>
        <Navbar />
        <Layaut>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/Servicios' element={<Servicios></Servicios>}></Route>
              <Route path='/Galeria' element={<Galeria></Galeria>}></Route>
              <Route path='/Ofertadelmes' element={<Ofertadelmes></Ofertadelmes>}></Route>
              <Route path='/Reservar' element={<Reservar></Reservar>}></Route>
              <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
        </Layaut>
        <Footer />
      </div>
    </>
  );
}

export default App;
