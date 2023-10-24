import styles from './Card.module.css'
import Check from '../assets/check.svg'
import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import Checked from '../assets/checked.svg'


export function Card({ id, content, checked, onChangeChecked, onDeleteTask}) {

    const [isChecked, setIsChecked] = useState(checked)

    function handdleCheckBox(){
        setIsChecked(!isChecked)

        onChangeChecked(id)
    }

    function handdleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        
        <div className={styles.card}>
            <div onClick={handdleCheckBox}>
                {isChecked ? <img src={Checked} /> : <img src={Check} />}
            </div>
            <div className={styles.contentText}>
                <span className={isChecked ? styles.lineThrough : styles.lineWhioutThrough}>{content}</span>
            </div>
            <div onClick={handdleDeleteTask}>
                <Trash />
            </div>
        </div>
            
    )
}