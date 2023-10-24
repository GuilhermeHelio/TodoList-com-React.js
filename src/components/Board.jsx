
import styles from './Board.module.css'
import { CreateTask } from './CreateTask'
import  Clipboard  from '../assets/ClipBoard.svg'
import { Card } from './Card'
import { useState } from 'react'

export function Board () {

    const [listAllTask, setListAllTask] = useState([]);
    const [countTaskDone, setCountTaskDone] = useState(0);

    function handdleNewTask(task) {
        setListAllTask([...listAllTask, task]);
    }

    function handdleChangeChecked(id){
        let countTaskDone = 0;

        const listTaskChanged = listAllTask.map(item => {
            if (item.id == id) {
                item.checked = !item.checked
            }

            if (item.checked == true) {
                countTaskDone++
            }

            return item;
        })

        setCountTaskDone(countTaskDone);
        setListAllTask(listTaskChanged);
    }

    function handdleDeleteTaskOfList(id) {
        const listWhioutOne = listAllTask.filter(task => {
            return task.id != id
        })

        setListAllTask(listWhioutOne);
    }

    const countNewTask = listAllTask.length;

    return (
        <>
           <div className={styles.containerCenter}>
               <CreateTask onNewTask={handdleNewTask}/>
           </div>

           <header className={styles.header}>
                <div className={styles.taskCreate}>
                    <strong>Tarefas criadas</strong>
                    <button>{countNewTask}</button>
                </div>

                <div className={styles.taskFineshed}>
                    <strong>Concluídas</strong>
                    <button>{countTaskDone} de {listAllTask.length}</button>
                </div>
           </header>

           <div className={styles.listTask}>


                {listAllTask.length == 0 ? 
                    <div className={styles.noTask}>
                        <div>
                            <img src={Clipboard}/>
                        </div>
                        <div>
                            <strong>Você ainda não tem tarefas cadastradas</strong><br/>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </div>
                :
                    <div>
                        {listAllTask.map(item => {
                            return (
                                <Card 
                                id={item.id} 
                                content={item.content} 
                                checked={item.checked} 
                                onChangeChecked={handdleChangeChecked}
                                onDeleteTask={handdleDeleteTaskOfList}
                                />
                            )
                        })}
                    </div> 
                }
                         
           </div>   
        
        </>
    )
}