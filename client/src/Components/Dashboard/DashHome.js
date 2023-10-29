import { Fragment } from "react"
import MyEvents from "./myEvents"
import MyMessages from "./myMessages"


function DashHome() {
    return (
        <Fragment>
            <MyEvents />
            <MyMessages />
        </Fragment>
    )
}

export default DashHome
