import { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {
    const [boxSize, setBoxSize] = useState({ height: 0, width: 0 })
    const h2Ref = useRef()

    useLayoutEffect(() => {
        const { height, width } = h2Ref.current.getBoundingClientRect()
        setBoxSize({ height, width })
    }, [name])

    return (
        <section style={{ height: 200, display: 'flex', flexDirection: 'row' }}>
            <h2 ref={h2Ref} className='text-capitalize'>#{id} - { name }</h2>

            <div>
                {
                    sprites.map((sprite, index) => (
                        <img key={`${sprite}-${index}`} src={sprite} alt={name}/>
                    ))
                }
            </div>

            <pre>
                { JSON.stringify(boxSize) }
            </pre>
        </section>
    )
}
