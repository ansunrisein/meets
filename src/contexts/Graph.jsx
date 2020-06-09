import React, {createContext, useMemo, useContext, useEffect, useState} from 'react'
import {isLinked, generateGraph} from '../services/graph'

const GraphContext = createContext({})

export const GraphProvider = ({children}) => {
    const [graph, setGraph] = useState({nodes: [], edges: []})
    const [linked, setLinked] = useState(false)
    const [matrix, setMatrix] = useState([])

    useEffect(() => {
        setGraph(generateGraph(matrix))
        setLinked(isLinked(matrix))
    }, [matrix, setGraph, setLinked])

    const value = useMemo(() => ({graph, matrix, setMatrix, linked}), [
        graph,
        matrix,
        setMatrix,
        linked,
    ])

    return (
        <GraphContext.Provider value={value}>{children}</GraphContext.Provider>
    )
}

export const useGraph = () => useContext(GraphContext)