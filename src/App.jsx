import React from 'react'
import './index.css'
import Graph from './components/Graph'
import Dropzone from './components/Dropzone'
import styles from './App.module.css'
import {useGraph} from './contexts/Graph'
import Matrix from './components/Matrix'
import Icon from './components/Icon'

const App = () => {
    const {matrix, linked} = useGraph()

    return (
        <Dropzone>{
            matrix && matrix.length
                ? (
                    <div className={styles.container}>
                        <Graph/>
                        <Matrix/>
                        <div className={styles.icon_container} title={`Знакомства ${linked ? '' : 'не'}возможны`}>
                            <Icon icon={linked ? 'yes' : 'no'}/>
                        </div>
                    </div>
                )
                : (
                    <div className={styles.empty_container}>
                        <Icon icon="cat" height="auto" width="auto"/>
                        <h1 className={styles.text}>Перетащите файл сюда или нажмите на экран, чтобы выбрать его</h1>
                    </div>
                )
        }</Dropzone>
    )
}

export default App
