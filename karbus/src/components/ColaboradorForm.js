import React, { useState } from 'react';

const initialData = [
  {
    id: 1,
    nombre: 'John',
    apellido: 'Doe',
    dpi: '123456789',
    fechaNacimiento: '1990-01-01',
    licenciaConducir: 'ABC123',
    tipoLicencia: 'A',
    telefono: '555-1234',
  },
  {
    id: 2,
    nombre: 'Jane',
    apellido: 'Smith',
    dpi: '987654321',
    fechaNacimiento: '1995-03-15',
    licenciaConducir: 'XYZ789',
    tipoLicencia: 'B',
    telefono: '555-5678',
  },
];

function App() {
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdd = () => {
    const newData = [...data, { ...formData, id: Date.now() }];
    setData(newData);
    setFormData({});
  };

  const handleEdit = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, ...formData } : item
    );
    setData(updatedData);
    setFormData({});
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleEditClick = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  return (
    <div className="container mt-5">
      <h1>CRUD de Personas</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Agregar/Editar Persona</h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="nombre"
                value={formData.nombre || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="apellido"
                value={formData.apellido || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="DPI"
                name="dpi"
                value={formData.dpi || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Nacimiento"
                name="fechaNacimiento"
                value={formData.fechaNacimiento || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Licencia de Conducir"
                name="licenciaConducir"
                value={formData.licenciaConducir || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tipo de Licencia"
                name="tipoLicencia"
                value={formData.tipoLicencia || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Número de Teléfono"
                name="telefono"
                value={formData.telefono || ''}
                onChange={handleInputChange}
              />
            </div>
            {isEditing ? (
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleEdit(formData.id)}
              >
                Editar
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAdd}
              >
                Agregar
              </button>
            )}
          </form>
        </div>
        <div className="col-md-6">
          <h2>Lista de Personas</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DPI</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.dpi}</td>
                  <td>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEditClick(item)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
