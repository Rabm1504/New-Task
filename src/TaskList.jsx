import React from 'react';

function TaskList({ tasks, onDeleteTask }) {
  // Asegúrate de que tasks sea un array antes de continuar
  if (!Array.isArray(tasks)) {
    return null; // O muestra un mensaje de error, según la necesidad
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDeleteTask(index)}>Eliminar Tarea</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
