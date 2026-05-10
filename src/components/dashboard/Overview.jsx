
import React from "react"
import { DashBoardContext } from "./DashBoard";

// importing 
import ContactInfo from "./ContactInfo";
import ShippingAdmin from "./ShippingAdmin";
import LogSecurity from "./LogSecurity";
import FedexDeliveryManager from "./FedexDeliveryManager";

const overViewCard = [
    {
        key: 1,
        icon : <FaTriangleExclamation className="profile-icon"/>,
        title: "Review your information",
        text: "Please confirm your contact information is current.",
        page: "contact",
        button: "UPDATE"
    },
    {
        key: 2,
        icon : <FaDropbox className="profile-icon"/> ,
        title: "Add a shipping account",
        text: "Get exclusive benefits when you create a Cargoo® shipping account.",
        page: "shipping",
        button: "ADD"
    },
    {
        key: 3,
        icon :  <FaTruck className="profile-icon"/>,
        title: "Manage your deliveries",
        text: " Use FedEx Delivery Manager® to take more control of your deliveries.",
        page: "fedexManger",
        button: "ENROLL"
    },
    {
        key: 4,
        icon :  <FaKey className="profile-icon" />,
        title: "Enable Two-Step Verification",
        text: "  Add a layer of security - sign into your account with a secure code.",
        page: "security",
        button: "SET"
    }
]

// react-icon
import { FaTriangleExclamation ,FaDropbox, FaKey, FaTruck } from "react-icons/fa6";

export default function Overview (){
    
    const{overviewPage, setOverviewPage} = React.useContext(DashBoardContext)

    return (
        <>
            {overviewPage === "main" && <OverviewPage setOverviewPage={setOverviewPage} />}
            {overviewPage === "contact" && <ContactInfo /> }
            {overviewPage === "shipping" && <ShippingAdmin />}
            {overviewPage === "security" &&  <LogSecurity />}
            {overviewPage === "fedexManger" && <FedexDeliveryManager />}
        </>
    )
}



function OverviewPage (){

    const {setOverviewPage ,scrollRef} = React.useContext(DashBoardContext)
    
    return (
        <div ref={scrollRef} className="w-full md:w-2/3 h-full md:h-screen mt-20 md:mt-0 ">

            {/* <!-- content --> */}
            <div className="space-y-4">

                <h2 className="text-xl md:text-5xl font-light text-stone-800">
                    Overview
                </h2>

                {/* <!-- icons of calender and listing  --> */}
                <div className="w-full flex items-center gap-1">
                    <i className="fa-solid fa-circle-user "></i> 
                    <h5 className="text-stone-500">User Account Tools</h5>
                </div>

                <div className="profile--tool__container">

                    {/* <!-- tool card 1 --> */}
                    {overViewCard.map(card => {
                        return (
                            <div key={card.key} className="tool-card ">
                                {/* <i className="fa-solid fa-triangle-exclamation profile-icon"></i> */}
                                {card.icon}
                                <h3>{card.title}</h3>
                                <p>
                                    {card.text}
                                </p>
                                <button 
                                    className="tool-link self-start 
                                    text-[#007ab7] font-bold text-xs "
                                    onClick={()=> setOverviewPage(card.page)}
                                >
                                    {card.button}
                                </button>
                            </div >
                        )
                    })}

                </div>
            
            </div>
        </div>
    )
}


