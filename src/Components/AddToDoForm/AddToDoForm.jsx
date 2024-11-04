//import React from "react";
import { useRef } from "react";
import styles from "./AddToDoForm.module.scss";
import axios from "axios";

const AddToDoForm = ({ params }) => {
  const TaskRef = useRef();
  const DescripRef = useRef();

  async function addNewTask(event) {
    //
    event.preventDefault();

    let task = {
      name: TaskRef.current.value,
      isCompleted: false,
      description: DescripRef.current.value,
      creator: "Anthoni",
    };

    //Hace la petición POST para guardar la nueva tarea
    try {
      const response = await axios.post("http://localhost:3000/todos", task);
      params(response.data); // Esta linea conecta con la función renderNewTask en el ToDoList para rendizar la nueva tarea en ToDoItem
    } catch (error) {
      console.log("Error: ", error);
    }

    // Reset input de la tarea
    TaskRef.current.value = "";
    DescripRef.current.value = "";
  }

  return (
    <div className={styles.formulario}>
      <img src={"/todolistimage.jpg"} alt="image" className={styles.imagen} />
      <form onSubmit={addNewTask}>
        <h2>Agrega tus Tareas </h2>
        <label htmlFor="name">Nombre de la tarea</label>
        <input type="text" ref={TaskRef} required />
        <label htmlFor="description">Descripción de la tarea</label>
        <input type="text" ref={DescripRef} required />
        <div>
          <button type="submit">Crear Tarea</button>
        </div>
      </form>
    </div>
  );
};

export default AddToDoForm;
