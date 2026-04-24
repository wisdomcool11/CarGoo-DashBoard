import React from "react"
import ContactInfoEdit from "./ContactInfoEdit"

export default function ContactInfo(){

    const [isEdit, setEdit] = React.useState (false)

    function handleEdit (){
        setEdit(prevEdit => !prevEdit)
        console.log("Editing...")
    }

    return (
        <>
            { !isEdit ?
                <div className="w-full md:w-2/3 mt-20 md:mt-0">

                    {/* <!-- content --> */}
                    <div className="space-y-4">

                        <h2 className="text-xl md:text-5xl 
                        font-light text-stone-800 ">
                            Contact Information
                        </h2>

                        <div className="profile--tool__container">

                            {/* <!-- tool card 1 -->Name */}
                            <div className="tool-card tool-card-contactForm contact--info__card ">
                                
                                <i className="fa-solid fa-circle-user profile-icon"></i> 
                                
                                {/* <h3>Contact name and address</h3> */}
                                
                                <div className="flex flex-col gap-2">
                                    <span>wisdom Aghabie</span>
                                    <span>Shorinmade Street</span>
                                    <span>Agege, 101233</span>
                                    <span>Nigeria</span>
                                    <span>+234 9065267379</span>
                                    <span>wisdomcool11@gmail.com</span>
                                </div>

                                <button className="tool-link self-start 
                                text-[#007ab7] font-bold text-xs "
                                    onClick={handleEdit}
                                >
                                        Edit
                                </button>
                            </div >

                        </div>
                    
                    </div>
                </div>
                : <ContactInfoEdit setEdit={setEdit} />
            }
        
        </>
    )
}
