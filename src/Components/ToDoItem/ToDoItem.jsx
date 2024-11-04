import React from "react";
import styles from "./ToDoItem.module.scss";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
//
const ToDoItem = ({ task, completeTask, askDeleteTask, editTask }) => {
  //
  function checkTask(taskId) {
    completeTask(taskId);
  }

  function askToDelete(task) {
    askDeleteTask(task);
  }

  function showEditTask(task) {
    editTask(task);
  }
  return (
    <tbody>
      <tr className={task.isCompleted ? styles.completed : ""}>
        <td className={styles.acciones}>
          <input
            type="checkbox"
            onClick={() => checkTask(task.id)}
            checked={task.isCompleted}
            readOnly
          />
          <button onClick={() => askToDelete(task)}>
            <FaTrash />
          </button>
          <button onClick={() => showEditTask(task)}>
            <FaEdit />
          </button>
        </td>
        <td>{task.name}</td>
        <td>{task.description}</td>
        <td>{task.isCompleted ? "Completada" : "Pendiente"}</td>
        <td>{task.creator}</td>
      </tr>
    </tbody>
  );
};

export default ToDoItem;
