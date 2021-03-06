import { getUserDetails } from "../../utils/api";
import React from "react";

export function DashboardPage({ history }) {
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect( () => {
        getUserDetails()
            .then(({ data }) => {
                console.log(data)
                setUser(data)
                setLoading(false)
            }).catch((err) => {
                history.push('/')
                setLoading(false)
            })
    }, [])

    return !loading && (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    )
}