import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Contenido de la página de inicio...</p>
      
      <h2>Otras opciones:</h2>
      <ul>
        <li>
          <Link to="/colaborador/form">Agregar Colaborador</Link>
        </li>
        <li>
          <Link to="/colaborador/list">Lista de Colaboradores</Link>
        </li>
        {/* Agrega más enlaces aquí para otras partes de tu aplicación */}
      </ul>
    </div>
  );
}

export default Inicio;
