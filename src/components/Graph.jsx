import React, {useEffect, useState} from 'react'
import Sigma from 'react-sigma'
import {useGraph} from '../contexts/Graph'
import styles from './Graph.module.css'

const style = {width: '100%', height: '100%', position: 'relative'}
const settings = {
    drawEdges: true,
    sideMargin: 0.3,
    clone: false,
    enableCamera: false
}

const Graph = () => {
    const {graph} = useGraph()

    const [Component, setComponent] = useState('div')

    useEffect(() => void(setComponent(Component === 'div' ? 'span' : 'div')), [graph])

    return (
        <Component className={styles.container}>
            {graph.nodes.length ? (
                <Sigma
                    renderer="canvas"
                    graph={graph}
                    settings={settings}
                    style={style}
                />
            ) : (
                <></>
            )}
        </Component>
    )
}

export default Graph
