import Button from "./components/button/Button"
import Layaut from "./components/layaut/Layaut"


function App() {

  return (
    <>
      <div className="bg-secondary">
          <Button name= "ACERCA DE" />
          <Button name= "SERVICIOS" />
          <Button name= "GALERIA" />
          <Button name= "CONTACTO" />
          <Button name= "RESERVA ONLINE" />
          <Layaut/>
      </div>
    </>
  )
}

export default App;
