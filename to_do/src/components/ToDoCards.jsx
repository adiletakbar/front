import { to_do } from "../data/list";
import styles from "./ToDoCards.module.scss";

const ToDoCards = ({ to_do }) => { 
    return (
        <div className={styles.card}>
            <div className={styles.cont}>
                <h2 className="text-lg font-semibold mb-2">{to_do.title}</h2>
                <p className="text-gray-600">{to_do.description}</p>
                <h6>{to_do.status}</h6>
                <h6>{to_do.createdAt}</h6>
            </div>  
            <button className={styles.button}>Button</button>
        </div>
    );
};

export default ToDoCards;
