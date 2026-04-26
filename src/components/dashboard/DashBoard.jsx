import React from "react"
import Asidemenu from "./AsideMenu"
import Overview from "./Overview"
import LogSecurity from "./LogSecurity"
import ContactInfo from "./ContactInfo"
import AccountPayment from "./AccountPayment"
import ShippingAdmin from "./ShippingAdmin"
import Preference from "./Preference"


const DashBoardContext = React.createContext();

export default function Dashboards(){

    // state variables
    const[isShown, setShown] = React.useState ("menu1")
    const[overviewPage, setOverviewPage] = React.useState("main")

    const scrollRef = React.useRef(null)

    React.useEffect(()=>{
        
        if(scrollRef.current && window.innerWidth < 768){
            scrollRef.current.scrollIntoView ({
                behavior: "smooth",
                block : "start"
            })    
        }
    },[isShown, overviewPage])//if any of this is true/clicked, run the block.

    return (
        <DashBoardContext.Provider 
            value={{
                setShown, 
                overviewPage, 
                setOverviewPage , 
                scrollRef 
            }}
        >
            <section className="bg-stone-150 py-20 px-2 md:px-4 w-full 
            h-full flex flex-col md:flex-row ">
                <Asidemenu />

                {/* dash board side menu button */}
                {isShown === "menu1" && <Overview />} 
                {isShown === "menu2" && <LogSecurity />}
                {isShown === "menu3" && <ContactInfo />}
                {isShown === "menu4" && <AccountPayment />}
                {isShown === "menu5" && <ShippingAdmin />}
                {isShown === "menu6" && <Preference />}
            </section>
        </DashBoardContext.Provider>
    )
}

export {DashBoardContext}
