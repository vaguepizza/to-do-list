import { useEffect, useState } from "react"

const ToDoList = () => {

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("taskList");
        const initialList = JSON.parse(saved);
        return initialList || [];
    });

    const handleTaskAdd = () => {
        if(document.getElementById("taskInput").value.trim()!="") {
            const newTask = document.getElementById("taskInput").value;
            document.getElementById("taskInput").value = "";
            setTasks(t => [...t,newTask]);
        }
        else {
            alert("Please enter a task");
        }
    }

    const handleTaskRemove = (index) => {
        setTasks(tasks.filter((_,i) => i!=index))
    }

    useEffect(() => {
        localStorage.setItem("taskList",JSON.stringify(tasks))
    },[tasks]);

    return (
        <div className="to-do-list">
            <h1>to do list</h1>
            <div className="to-do-list_input">
                <input type="text" id="taskInput" placeholder="Enter your task"/><button onClick={handleTaskAdd}>Add</button>
            </div>
            <ul className="to-do-list_tasks">
                {tasks.map((task,index) => (
                        <div className="to-do-list_tasks__item">
                            <li key={index} id={index}>{task}</li><button onClick={() => handleTaskRemove(index)}>x</button>
                        </div>
                    )
                )}
            </ul>
        </div>
    )
}

export default ToDoList