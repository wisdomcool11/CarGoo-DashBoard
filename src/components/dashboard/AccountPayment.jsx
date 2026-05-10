
import React from "react"
import { DashBoardContext } from "./DashBoard"
import Button from "../button/Button"

export default function AccountPayment (){

    const{scrollRef} = React.useContext(DashBoardContext)

    return (
            <div ref={scrollRef} className="w-full md:w-2/3 h-full mt-20 md:mt-0 ">

                {/* <!-- content --> */}
                <div className="space-y-4">

                    <h2 className="text-xl md:text-5xl font-light text-stone-800">
                        Accounts & Payments
                    </h2>

                    {/* <!-- icons of calender and listing  --> */}
                    <div className="w-full flex items-center gap-1">
                        <i className="fa-solid fa-circle-user "></i> 
                        <h5 className="text-stone-500">You do not yet have a shipping account.</h5>
                    </div>

                    <div className="profile--tool__container">

                        {/* <!-- tool card 1 --> */}
                        <div className="tool-card account__payment-card ">
                            <Button>
                                Pay Now
                            </Button>
                        </div >

                    </div>

                </div>
            </div>
    )
}
