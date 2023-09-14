import React, { useState } from 'react';
import TaskList from './TaskList'; // Importa el componente TaskList

function TaskApp() {
  // Estado para almacenar la tarea actual
  const [task, setTask] = useState('');
  
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea a la lista
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {/* Input para ingresar una nueva tarea */}
      <input
        type="text"
        placeholder="Nueva tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* Botón para agregar una nueva tarea */}
      <button onClick={handleAddTask}>Agregar Tarea</button>
      {/* Renderiza el componente TaskList y pasa las tareas y una función para eliminar tareas */}
      <TaskList tasks={tasks} onDeleteTask={(index) => setTasks(tasks.filter((_, i) => i !== index))} />
    </div>
  );
}

export default TaskApp;
