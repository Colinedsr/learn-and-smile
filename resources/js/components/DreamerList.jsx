import { useEffect, useState } from "react"

export default function DreamerList({ dreamers }) {
    const [errorMessage, setErrorMessage] = useState('')
    const list = dreamers.map(dreamer => {
        return (
            <>
                <p>{dreamer.name}</p>
                <p>{dreamer.birthdate}</p>
                <p>{dreamer.avatar}</p>
            </>
        )
    })

    useEffect(() => {
        if (list.length === 0) {
            setErrorMessage('no dreamer')
        } else setErrorMessage('')
    }, [dreamers])

    return (
        <>
            {list.length > 0 && list}
            <p>{errorMessage}</p>
        </>
    )
}