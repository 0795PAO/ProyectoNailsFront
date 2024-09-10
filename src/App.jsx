import Button from "./components/button/Button"
import Layaut from "./components/layaut/Layaut"
import Navbar from "./components/navbar/Navbar";


function App() {

  return (
    <>
      <div className="bg-secondary">
        <Navbar></Navbar>
        <Layaut>
          <Button name="REGISTRO" />
          <h1>SOBRE NOSOTROS</h1>
          <P> Ubicado convenientemente en Aurora, Colorado, 80015, America Nails & Spa es uno de los mejores salones de esta área. America Nails & Spa ofrece servicios de cuidado de uñas y tratamientos de spa de primer nivel para satisfacer sus necesidades de realzar la belleza natural y refrescar su día.mi nueva linea</P>

          <P>Nuestro salón se enorgullece de brindarles a nuestros valiosos clientes todos los buenos servicios y productos y materiales de la más alta calidad. Puede encontrar todos los servicios relacionados con las uñas, desde manicura y pedicura hasta uñas acrílicas. En America Nails & Spa, nos enorgullecemos de brindarle todos los buenos productos y servicios calificados para ayudarlo a rejuvenecer su belleza. Siempre se sentirá amable y bienvenido por nuestro personal apasionado que comprende lo que desea.</P>
        </Layaut>
      </div>
    </>
  )
}

export default App;
