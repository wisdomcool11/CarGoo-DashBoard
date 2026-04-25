
import React from "react"
import { DashBoardContext } from "./DashBoard";

// importing 
import ContactInfo from "./ContactInfo";
import ShippingAdmin from "./ShippingAdmin";
import LogSecurity from "./LogSecurity";

export default function Overview (){
    
    const{overviewPage, setOverviewPage} = React.useContext(DashBoardContext)

    return (
        <>
            {overviewPage === "main" && <OverviewPage setOverviewPage={setOverviewPage} />}
            {overviewPage === "contact" && <ContactInfo /> }
            {overviewPage === "shipping" && <ShippingAdmin />}
            {overviewPage === "security" &&  <LogSecurity />}
        </>
    )
}



function OverviewPage (){

    const {setOverviewPage} = React.useContext(DashBoardContext)
    return (
        <div className="w-full md:w-2/3 h-full md:h-screen mt-20 md:mt-0 ">

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
                    <div className="tool-card ">
                        <i className="fa-solid fa-triangle-exclamation profile-icon"></i>
                        <h3>Review your information</h3>
                        <p>
                            Please confirm your contact information is current.
                        </p>
                        <button 
                            className="tool-link self-start 
                            text-[#007ab7] font-bold text-xs "
                            onClick={()=> setOverviewPage("contact")}
                        >
                            UPDATE
                        </button>
                    </div >

                    {/* <!-- tool card 2  --> */}
                    <div className="tool-card ">
                    <i className="fa-solid fa-box-open profile-icon"></i>
                        <h3>Add a shipping account</h3>
                        <p>
                            Get exclusive benefits when you create a Cargoo® shipping account.
                        </p>
                        <button 
                            onClick={()=> setOverviewPage("shipping")}
                            className="tool-link self-start text-[#007ab7] font-bold text-xs ">
                            ADD
                        </button>
                    </div >

                    {/* <!-- tool card 3 --> */}
                    <div className="tool-card">
                    <i className="fa-sharp fa-solid fa-key profile-icon "></i>
                        <h3>Enable Two-Step Verification</h3>
                        <p>
                            Add a layer of security - sign into your account with a secure code.
                        </p>
                        <button className="tool-link self-start text-[#007ab7] font-bold text-xs "
                            onClick={()=> setOverviewPage("security")}
                        >
                            SET UP
                        </button>

                    </div >

                </div>
            
            </div>
        </div>
    )
}


