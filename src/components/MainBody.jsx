

// importing 
import Header from "./header/Header"
import Dashboards from "./dashboard/DashBoard"
import Footer from "./footer/Footer"

export default function MainBody (){
    return (
        <div className="relative bg-stone-800 h-screen w-full">
            <div className=" bg-[#ee8f00] w-full md:w-[600px] h-96 rounded-e-full"> </div>

            <div className="container w-full absolute top-[10%] md:left-[3%] tranform translate-[-50%, -50%] bg-slate-50 rounded-2xl p-3 md:p-8 ">
                <Header />
                <Dashboards />
                <Footer />
            </div>
        </div>
    )
}
