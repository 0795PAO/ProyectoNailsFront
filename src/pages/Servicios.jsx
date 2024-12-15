import React from 'react';

const servicesData = [
  {
    category: 'UÑAS DE MANOS',
    items: [
      { name: 'UÑAS ACRÍLICAS SET COMPLETO', price: '45€+' },
      { name: 'RELLENO DE UÑAS ACRÍLICAS', price: '35€+' },
      { name: 'ACRÍLICO CON GEL SET COMPLETO', price: '55€+' },
      { name: 'ACRÍLICO CON RELLENO DE GEL', price: '45€+' },
      { name: 'SET COMPLETO DE POLVO DE COLOR ACRÍLICO', price: '60€+' },
      { name: 'RELLENO DE POLVO DE COLOR ACRÍLICO', price: '50€' },
      { name: 'CONJUNTO COMPLETO DE OMBRE ACRÍLICO', price: '65€+' },
      { name: 'RELLENO ACRÍLICO OMBRE', price: '55€+' },
      { name: 'CONJUNTO COMPLETO ROSA Y BLANCO', price: '60€+' },
      { name: 'RELLENO ROSA Y BLANCO', price: '55€+' },
      { name: 'SOLO RELLENO ROSA', price: '40€+' },
      { name: 'RECOGIDA DE ACRÍLICO SIN SERVICIO', price: '15€' },
      { name: 'RECOGIDA DE ACRÍLICO SIN SERVICIO', price: '15€' },
    ],
  },
  {
    category: 'UÑAS DE PIES',
    items: [
      { name: 'PEDICURE ESMALTE SENCILLO', price: '25€' },
      { name: 'CAMBIO DE ESMALTE (UÑAS DE LAS MANOS/PIES)', price: '7€' },
      { name: 'CAMBIO DE ESMALTE EN GEL', price: '15€' },
    ],
  },
  {
    category: 'LIMPIEZA FACIAL',
    items: [
      { name: 'LIMPIEZA PROFUNDA DE POROS', price: '12€5' },
      { name: 'ACIAL ULTRA CALMANTE', price: '13€5' },
      { name: 'EFACIAL SPA EUROPEO', price: '15€0' },
      { name: 'MICRODERMOABRASIÓN FACIAL', price: '16€5' },
    ],
  },
  {
    category: 'PESTAÑAS',
    items: [
      { name: 'SET INDIVIDUAL CLÁSICO', price: '70€' },
      { name: 'SET DE VOLUMEN 3D', price: '95€' },
      { name: 'PESTAÑAS DE VOLUMEN HÍBRIDO', price: '90€' },
      { name: 'PESTAÑAS DIVA MEGA VOLUME', price: '10€0' },
    ],
  },
  {
    category: 'CEJAS',
    items: [
      { name: 'LAMINACIÓN DE CEJAS', price: '40€' },
      { name: 'TINTE DE CEJAS', price: '30€' },
    ],
  },
  {
    category: 'DEPILACIÓN CON CERA',
    items: [
      { name: 'CEJAS', price: '12€' },
      { name: 'LABIOS', price: '7€' },
      { name: 'LABIOS Y CEJAS', price: '17€+' },
      { name: 'MENTÓN', price: '10€+' },
    ],
  },
];

const Servicios = () => (
  <div className="container mx-auto px-4 py-8">
    {servicesData.map(({ category, items }, index) => (
      <div key={index} className="mb-8">
        <h2 className="text-pink-600 text-xl font-bold mb-4">{category}</h2>
        <div className="grid grid-cols-2 gap-4">
          {items.map(({ name, price }, idx) => (
            <div key={idx} className="flex justify-between border-b py-2">
              <span>{name}</span>
              <span>{price}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Servicios;
