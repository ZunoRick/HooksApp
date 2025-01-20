import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const increment = useCallback((value) => {
        setCounter((prev) => prev + value)
    }, [])

    useEffect(() => {
        increment(1)
    }, [increment])

    return (
        <>
            <h1>Callback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </>
    )
}
