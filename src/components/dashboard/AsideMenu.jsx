import React from "react"
import { DashBoardContext } from "./DashBoard";

export default function Asidemenu (){

    const {setShown ,setOverviewPage , } = React.useContext(DashBoardContext)

    return (
        <aside className="w-full md:w-1/3 h-full px-2 space-y-6 md:space-y-16">
            <div className=" w-full md:w-[300px] h-full space-y-7 bg-stone-800 flex flex-col justify-center items-center p-8 rounded-xl">
                <div className="sub-profile__menu-list self-start space-y-5 list-image-[url(/src/imgs/icons/check-mark.png)] list-inside">
                    <button onClick={()=> {
                            setShown("menu1");
                            setOverviewPage ("main");
                        }} 
                        className="text-[#ee8f00]"
                    >
                        OVERVIEW
                    </button>

                    <hr className="sub-divider " />
                    <button onClick={()=> setShown("menu2")}>LOGIN & SECURITY</button>
                    <hr className="sub-divider" />
                    <button onClick={()=> setShown("menu3")}>CONTACT INFORMATION</button>
                    <hr className="sub-divider" />
                    <button onClick={()=> setShown("menu4")}>ACCOUNTS & PAYMENTS</button>
                    <hr className="sub-divider " />
                    <button onClick={()=> setShown("menu5")}>SHIPPING ADMINISTRATION</button>
                    <hr className="sub-divider " />
                    <button onClick={(()=> setShown("menu6"))}>PREFERANCES</button>
                </div>
            </div>
        </aside>
    )
}



