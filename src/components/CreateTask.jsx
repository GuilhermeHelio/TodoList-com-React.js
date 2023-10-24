import { PlusCircle } from '@phosphor-icons/react'
import { useState, useEffect, useContext } from 'react'
import styles from './CreateTask.module.css'

export function CreateTask({onNewTask}) {


    const [newTask, setNewTask] = useState ("");
    



    function handdleChangeContent(event) {
        setNewTask(event.target.value);
    }

    function handdleSaveNewTask() {
        let newTaskCreated = {
            id: Math.random(),
            content: newTask,
            checked: false
        }

        onNewTask(newTaskCreated)
    }


    const isInputEmpty = newTask == ""; false



    return (
        <>
            <div className={styles.formGroup}>
                <div>
                    <input 
                    type="text" 
                    className={styles.input}
                    value={newTask}
                    placeholder='Adicione uma nova tarefa'
                    required
                    onChange={handdleChangeContent}

                    />
                </div>
                <div>
                    <button 
                    className={styles.button}
                    disabled={isInputEmpty}
                    onClick={handdleSaveNewTask}

                    >Criar
                    <PlusCircle size={16} />
                    </button>
                </div>
            </div>
        
        </>
    )

}