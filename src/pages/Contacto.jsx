import React from 'react';

const Contacto = () => {
    return (
        <section className="text-black body-font relative bg-primary"> {/* Cambiado a bg-primary */}
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                                CORREO ELECTRÓNICO
                            </h2>
                            <a className="text-black leading-relaxed"> {/* Cambiado a text-black */}
                                ejemplo@email.com
                            </a>
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                                TELÉFONO
                            </h2>
                            <p className="leading-relaxed">
                                123-456-7890
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-black text-lg mb-1 font-medium title-font"> {/* Cambiado a text-black */}
                        Comentario
                    </h2>
                    <p className="leading-relaxed mb-5 text-black"> {/* Cambiado a text-black */}
                        El parque eco shabby chic de Portland, irónico y de estilo banjo
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-black"> {/* Cambiado a text-black */}
                            Nombre
                        </label>
                  
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-black"> {/* Cambiado a text-black */}
                            Mensaje
                        </label>
                       
                    </div>
                   
                </div>
            </div>
        </section>
    );
}

export default Contacto;
