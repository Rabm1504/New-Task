// App.jsx
import React from 'react';
import TaskApp from './TaskApp';
import TaskList from './TaskList';

function App() {
  return (
    <div>
      <h1>Aplicación de Tareas</h1>
      <TaskApp /> {/* Renderiza el componente TaskApp */}
      <TaskList /> {/* Renderiza el componente TaskList */}
    </div>
  );
}

export default App;
