import React from "react";
import { getUserDetails } from "../../utils/api";
import { HomeComponent } from "../../components";

export function LandingPage(props) {

    const [user, setUser] = React.useState(null)
    const [logged, setLogged] = React.useState(false)

    React.useEffect( () => {
        getUserDetails()
            .then(({ data }) => {
                console.log(data)
                setUser(data)
                setLogged(true)
            }).catch((err) => {
                setLogged(false)
            })
    }, [])

    document.body.style.backgroundColor = "#192530";

    return (
        <div >
            <HomeComponent user={user} logged={logged} />
        </div>
    )
}