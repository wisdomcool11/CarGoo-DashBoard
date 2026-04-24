import React from "react"
import Asidemenu from "./AsideMenu"
import Overview from "./Overview"
import LogSecurity from "./LogSecurity"
import ContactInfo from "./ContactInfo"
import AccountPayment from "./AccountPayment"
import ShippingAdmin from "./ShippingAdmin"
import Preference from "./Preference"
// import ContactInfoEdit from "./ContactInfoEdit"

export default function Dashboards(){

    const[isShown, setShown] = React.useState ("menu1")

    return (
        <section className="bg-stone-150 py-20 px-2 md:px-4 w-full 
        h-full flex flex-col md:flex-row ">
            <Asidemenu setShown={setShown}/>
            {isShown === "menu1" && <Overview />} 
            {isShown === "menu2" && <LogSecurity />}
            {isShown === "menu3" && <ContactInfo />}
            {isShown === "menu4" && <AccountPayment />}
            {isShown === "menu5" && <ShippingAdmin />}
            {isShown === "menu6" && <Preference />}
            {/* <ContactInfoEdit /> */}
        </section>
    )
}
