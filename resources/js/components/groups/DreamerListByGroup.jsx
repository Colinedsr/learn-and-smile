import { useEffect, useState } from "react"
import GroupMembers from "./GroupMembers";

export default function DreamerListByGroup({ groups }) {
    const [errorMessage, setErrorMessage] = useState('')
    const list = groups.map(group => {
        for (const key in group) {
            const value = group[key];
            return (
                <>
                    <h3>{key}</h3>
                    <GroupMembers members={group[key]} />
                </>
            )
        }

    })
    useEffect(() => {
        if (list.length === 0) {
            setErrorMessage('no dreamer')
        } else setErrorMessage('')
    }, [groups])

    return (
        <>
            <p>Members of the group</p>
            {list}
            <p>{errorMessage}</p>
        </>
    )
}