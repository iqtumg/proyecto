import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColaboradorForm from './components/ColaboradorForm';
import ColaboradorItem from './components/ColaboradorItem';
import ColaboradorList from './components/ColaboradorList';
import Inicio from './components/Inicio';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/colaborador/form" element={<ColaboradorForm />} />
          <Route path="/colaborador/item" element={<ColaboradorItem />} />
          <Route path="/colaborador/list" element={<ColaboradorList />} />
          <Route path="/" element={<Inicio />} /> {/* Agrega la ruta para Inicio */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
