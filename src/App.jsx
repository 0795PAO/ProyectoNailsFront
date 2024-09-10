import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./components/button/Button";
import Layaut from "./components/layaut/Layaut";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div 
        className="bg-secondary min-h-screen flex flex-col bg-no-repeat bg-center" 
        style={{ 
          backgroundImage: "url('/public/imagenes/logo.png')", // Ruta de la imagen de fondo
          backgroundSize: "contain", // Asegura que el logo se muestre completo
          backgroundColor: "pink" // Agrega un color de fondo para que el logo sea visible
        }}
      >
        <Navbar />
        <Layaut>
          <BrowserRouter>
            <Routes>
              <Route path="/"></Route>
            </Routes>
          </BrowserRouter>
        </Layaut>
      </div>
    </>
  );
}

export default App;
