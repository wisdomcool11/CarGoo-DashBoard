
import React from "react"

export default function Overview (){
    return (
        // <!-- main body -->
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
                        <a href="/public/user-page/contact_info_edit.html" className="tool-link self-start text-[#007ab7] font-bold text-xs ">UPDATE</a>
                    </div >

                    {/* <!-- tool card 2  --> */}
                    <div className="tool-card ">
                       <i className="fa-solid fa-box-open profile-icon"></i>
                        <h3>Add a shipping account</h3>
                        <p>
                            Get exclusive benefits when you create a Cargoo® shipping account.
                        </p>
                        <a href="#" className="tool-link self-start text-[#007ab7] font-bold text-xs ">ADD</a>
                    </div >

                    {/* <!-- tool card 3 --> */}
                    <div className="tool-card">
                      <i className="fa-sharp fa-solid fa-key profile-icon "></i>
                        <h3>Enable Two-Step Verification</h3>
                        <p>
                            Add a layer of security - sign into your account with a secure code.
                        </p>
                        <a href="/public/user-page/log_&_security.html" className="tool-link self-start text-[#007ab7] font-bold text-xs ">SET UP</a>
                    </div >

                </div>
            
            </div>
        </div>
    )
}

