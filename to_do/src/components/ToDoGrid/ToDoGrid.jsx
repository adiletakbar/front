import { useState } from "react";
import { to_do as t } from "../../data/list"; // твои данные
import ToDoCards from "../ToDoCards";
import styles from "./ToDoGrid.module.scss";

export default function ToDoGrid() {

  const [to_do, setTo_do] = useState(t);

 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const addTask = () => {

    const newTask = {
      id: Date.now(), 
      title,
      description,
      status: "Pending",
      createdAt: new Date().toLocaleDateString(),
    };

    setTo_do([...to_do, newTask]); 
    setTitle(""); 
    setDescription("");
  };

  return (
    <div>
  
      <h1 className={styles.title}>To Do List</h1>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

    
      <div className={styles.grid}>
        {to_do.map((item) => (
          <ToDoCards key={item.id} to_do={item} />
        ))}
      </div>
    </div>
  );
}
