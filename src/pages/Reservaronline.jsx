import React, { useState } from "react";

const Reservaronline = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        fecha: "",
        hora: "",
        servicio: "",
        privacidad: false,
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        // Cambiar el estado para mostrar el mensaje de éxito
        setIsFormSubmitted(true);

        // Cerrar el modal después del envío
        setIsModalOpen(false);

        // Reiniciar el formulario
        setFormData({
            nombre: "",
            telefono: "",
            fecha: "",
            hora: "",
            servicio: "",
            privacidad: false,
        });

        // Ocultar el mensaje de éxito después de 3 segundos
        setTimeout(() => {
            setIsFormSubmitted(false);
        }, 3000);
    };

    return (
        <div className="bg-secondary min-h-screen flex flex-col bg-no-repeat bg-center" style={{ backgroundImage: "url('/public/imagenes/logo.png')", backgroundSize: "contain", backgroundColor: "primary" }}>
            <div className="flex justify-center">
                <button onClick={() => setIsModalOpen(true)} className="bg-pink-500 text-black mt-12 px-10 py-2 w-64 rounded font-bold animate-bounce transition-transform duration-500 ease-in-out hover:scale-105">
                    <span className="animate-pulse">RESERVA ONLINE</span>
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        <button onClick={() => setIsModalOpen(false)} className="text-gray-500 float-right">&times;</button>
                        <h2 className="text-xl font-bold mb-4 text-center">RASHEL NAILS & SPA</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nombre *</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Teléfono *</label>
                                <input
                                    type="text"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">¿Qué servicio deseas? *</label>
                                <select
                                    name="servicio"
                                    value={formData.servicio}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="Uñas">Uñas</option>
                                    <option value="Limpieza Facial">Limpieza Facial</option>
                                    <option value="Pestañas">Pestañas</option>
                                    <option value="Cejas">Cejas</option>
                                    <option value="Depilación con Cera">Depilación con Cera</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    ¿Qué día te gustaría reservar? *
                                </label>
                                <input
                                    type="date"
                                    name="fecha"
                                    value={formData.fecha}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    ¿A qué hora te gustaría reservar? *
                                </label>
                                <input
                                    type="time"
                                    name="hora"
                                    value={formData.hora}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Comprobaremos la disponibilidad y te llamaremos para confirmar la reserva
                                </label>
                            </div>

                            <div className="mb-4">
                                <label className="flex items-center text-gray-700">
                                    <input
                                        type="checkbox"
                                        name="privacidad"
                                        checked={formData.privacidad}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                        required
                                    />
                                    Acepto la política de privacidad *
                                </label>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button className="bg-pink-500 text-black mt-12 px-10 py-2 w-64 rounded font-bold">
                                    <span className="animate-pulse">RESERVAR</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Mostrar mensaje de éxito */}
            {isFormSubmitted && (
                <div className="mt-4 text-black text-center">
                    El formulario se ha enviado correctamente.
                </div>
            )}
        </div>
    );
};

export default Reservaronline;
