import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {parse} from '../services/file'
import styles from './Dropzone.module.css'
import {useGraph} from '../contexts/Graph'

const Dropzone = ({children}) => {
    const {setMatrix} = useGraph()

    const onDrop = useCallback(
        acceptedFiles => {
            const reader = new FileReader()
            reader.readAsText(acceptedFiles[0])
            reader.addEventListener('load', ({target}) =>
                setMatrix(parse(target.result))
            )
        },
        [setMatrix]
    )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div className={styles.container} {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
        </div>
    )
}

export default Dropzone
