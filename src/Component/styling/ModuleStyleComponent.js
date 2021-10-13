import React from 'react'
import './myStyles.css'
import style from './myStyles.module.css'

export default function ModuleStyleComponent() {
    return (
        <div>
            <h1 className={style.error}>Moduel - Stylesheet</h1>
            <h1 className="error">External - Stylesheet</h1>
        </div>
    )
}
