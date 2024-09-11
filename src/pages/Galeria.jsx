import { useState } from 'react';

const products = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    imageSrc: `/public/imagenes/${i + 1}.jpeg`,
}));

function Galeria() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="bg-primary min-h-screen">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">  <h1 className="text-4xl font-bold mb-4 mt-4 text-center">GALERIA</h1>
                <p className="text-2xl mb-1  text-center">
                    ¡Bienvenidos a nuestra galería de inspiración! Sumérgete en un mundo de creatividad y belleza mientras exploras nuestra colección.
                </p>
<h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 xl:gap-x-19">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-10 xl:aspect-w-7 cursor-pointer" onClick={() => setSelectedImage(product.imageSrc)}>
                                <img alt=""  src={product.imageSrc}  className="h-full w-full object-cover object-center group-hover:opacity-75" /> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-h-full max-w-full"
                    />
                </div>
            )}
        </div>
    );
}

export default Galeria;
