const Home = () => {
    return (
        <div className="bg-secondary min-h-screen flex flex-col bg-no-repeat bg-center" style={{backgroundImage: "url('/public/imagenes/logo.png')", backgroundSize: "contain", backgroundColor: "primary"}}>
            <h1 className="text-4xl font-bold mb-4 mt-12 text-center">SOBRE NOSOTROS</h1>
            <p className="mb-4 mt-8 text-justify">
                Ubicado en A Coruña, Agra de Orzán 34 bajo, Rashel Nails & Spa es uno de los mejores salones de esta área. Ofrece servicios de cuidado de uñas y tratamientos de spa de primer nivel para satisfacer sus necesidades de realzar la belleza natural y refrescar su día.
            </p>
            <p className="text-justify">
                Nuestro salón se enorgullece de brindarles a nuestros valiosos clientes todos los buenos servicios y productos y materiales de la más alta calidad. Puede encontrar todos los servicios relacionados con las uñas, desde manicura y pedicura hasta uñas acrílicas. En Rashel Nails & Spa, nos enorgullecemos de brindarle todos los buenos productos y servicios calificados para ayudarlo a rejuvenecer su belleza. Siempre se sentirá amable y bienvenido por nuestro personal apasionado que comprende lo que desea.
            </p>
        </div>
    )
}

export default Home