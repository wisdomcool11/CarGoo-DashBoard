
import React from "react"
import { DashBoardContext } from "./DashBoard"

export default function Preference(){
    
    const{scrollRef} = React.useContext(DashBoardContext)

    return (
        <div ref={scrollRef}>
            Preference page!!!
        </div>
    )
}