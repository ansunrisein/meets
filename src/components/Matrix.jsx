import React from 'react'
import {useGraph} from '../contexts/Graph'
import styles from './Matrix.module.css'

const Matrix = () => {
    const {matrix} = useGraph()

    if (!matrix || !matrix.length)
        return <></>

    return (
        <table className={styles.table}>
            <tbody>
            {matrix.map((row, i) => (
                <tr key={i}>
                    {row.map((e, j) => (
                        <td className={styles.cell} key={'' + i + j}>
                            {e + ' '}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Matrix
