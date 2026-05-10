
import React from "react";
import { DashBoardContext } from "./DashBoard";
import Button from "../button/Button";

// icons
import { LuPackageSearch } from "react-icons/lu";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdOutlineLocalConvenienceStore } from "react-icons/md";

const keyBenefit = [
    {
        key: 1,
        icon : <LuPackageSearch className="text-2xl md:text-3xl"/>,
        topic: "Tracking",
        text : " Track packages and set up notifications on your phone, tablet, or computer."
    },
    {
        key: 2,
        icon : <FaPeopleCarryBox className="text-2xl md:text-3xl"/>,
        topic: "Security",
        text : " Keep deliveries safe by redirectly thousands of convenient locations."
    },
    {
        key: 3,
        icon : <MdOutlineLocalConvenienceStore className="text-2xl md:text-3xl"/>,
        topic: "Convenience",
        text : "Sign for packages digitally or redirect them for pick up on your own time."
    }
]

export default function FedexDeliveryManager (){

    const {scrollRef} = React.useContext(DashBoardContext)
    return (
        <div ref={scrollRef} className="w-full md:w-2/3 mt-20 md:mt-0">
            <h2 className="text-xl md:text-5xl 
                font-light text-stone-800 ">
                FedEx Delivery Manager
            </h2>

            <div className="w-full flex items-center gap-1 my-1">
                <h5 className="text-stone-500 text-sm md:text-base font-light">
                    Manage your login information, security settings and trusted devices
                </h5>
            </div>

            <div className="bg-stone-150 py-10 px-2 md:px-4 w-full md:w-[800px] h-full flex flex-col gap-7 md:mx-auto ">
                    <Button>
                        SIGN UP FOR FREE
                    </Button>
                <h3 className="text-xl md:text-2xl font-extralight">Two-step verification</h3>

                <div className="w-full md:w-[90%] grid grid-flow-col grid-col-3 gap-3">
                    {/* cards */}
                    {keyBenefit.map (keyBen => {
                        return (
                            <div key={keyBen.key} className="flex flex-col gap-2">
                                <div>
                                    {keyBen.icon}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="font-semibold text-base md:text-lg">{keyBen.topic}</h3>
                                    <p className="text-stone-500 text-sm md:text-base font-extralight">
                                        {keyBen.text}
                                    </p>
                                </div>
                            </div>

                        )
                    })

                    }
                </div>

                <button className="w-[120px] md:w-[160px] border-2 border-[#007ab7] text-[#007ab7] 
                p-2 rounded-full font-medium text-sm md:text-lg cursor-pointer hover:scale-[1.06] transition-all ease-in-out">
                    VIEW DETAILS
                </button>
            </div>
        </div>
    )
}
