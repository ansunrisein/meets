import React from 'react'

const RADIUS = 5

const l = (r, size) => (2 * Math.PI * r) / size

export const generateGraph = matrix => {
    const size = matrix.length
    const length = l(RADIUS, size)

    const nodes = matrix.map((_, i) => ({
        id: i.toString(),
        label: i.toString(),
        size: 1,
        color: '#000000',
        x: Math.cos((length / RADIUS) * i),
        y: Math.sin((length / RADIUS) * i)
    }))

    const edges = matrix
        .map((e, i) =>
            e.reduce(
                (acc, e, j) =>
                    e
                        ? acc.concat([
                            {
                                id: '' + i + j,
                                source: `${i}`,
                                target: `${j}`
                            }
                        ])
                        : acc,
                []
            )
        )
        .flat(1)

    return {nodes, edges}
}

const findEqualClass = (obj, i = 0) => {
    if (!obj[i])
        return []

    const {[i]: row, ...rest} = obj
    const indexes = row.reduce((acc, e, i) => e ? [...acc, i] : acc, [])
    return [...indexes, ...indexes.flatMap(e => findEqualClass(rest, e))]
}


export const isLinked = matrix => {
    const obj = matrix.reduce((acc, e, i) => ({...acc, [i]: e}), {})

    const eqClass = findEqualClass(obj)

    return matrix.length === new Set(eqClass).size
}
