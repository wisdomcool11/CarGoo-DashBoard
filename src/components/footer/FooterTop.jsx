

export default function FooterTop (){
    return (
        <div className="flex flex-col justify-center items-center text-center md:text-left md:grid md:grid-cols-4 gap-12 pb-10 ">

            {/* <!-- first section --> */}
            <Logo />
            {/* <!-- second footer section --> */}
            <OurService />
            {/* <!-- Third footer section --> */}
            <OurSupport />
            {/* <!-- forth footer section --> */}
            <ContactInfo />

        </div>
    )
}

function Logo (){
    return (
        <div className=" w-full h-full text-stone-200 flex flex-col items-center  justify-center  pace-y-5 ">

            <div className="flex justify-start items-center gap-3 items-center md:px-2 h-full text-center ">
                
                <i className="fa-solid fa-location-dot text-[#ee8f00] text-5xl md:text-4xl "> </i>

                <div className="flex flex-col ">
                    <h1 className="font-['PT Sans', sans-serif] font-bold text-md text-4xl  ">
                        CarGoo
                    </h1>

                    <p className="text-xs md:text-md ml-10 font-bold">
                        Logistics & <span className="text-[#ee8f00]">Cargo</span>
                    </p>
                </div>

            </div>

            <p className="leading-7 md:leading-8 text-sm md:text-base ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus qui ad aliquam rerum! Architecto amet id aperiam, totam nemo debitis.
            </p>

            {/* <!-- footer social medies --> */}
            <div className="w-full flex justify-center md:justify-start items-center gap-3 ">
                <a href="#"><i className="fa-brands fa-facebook social-media-footer"></i></a>
                <a href="#"><i className="fa-brands fa-twitter social-media-footer"></i></a>
                <a href="#"><i className="fa-brands fa-youtube social-media-footer"></i></a>
                <a href="#"><i className="fa-brands fa-instagram social-media-footer"></i></a>
            </div>
            
        </div>

    )
}

function OurService (){
    return (
        <div className=" w-full h-full space-y-7">

            <h3 className=" font-['PT Sans', sans-serif] font-bold text-md text-2xl text-white ">
                Our Services
            </h3>

            <ul className=" text-stone-200 text-sm md:text-base space-y-3 list-image-[url(../imgs/icons/check-mark.png)] list-inside font-semibold">
                <li><a href="/public/sub-services/export_&_import_service.html">
                    Export & import
                </a></li>
                <li><a href="/public/sub-services/domestic_logistic_service.html">
                    Domestic Logistic
                </a></li>
                <li><a href="/public/sub-services/customer_clearance_service.html">
                    Customer Clearance
                </a></li>
                <li><a href="/public/sub-services/truck_freight.html">
                    Trucking Feight
                </a></li>
                <li><a href="/public/sub-services/air_frieght.html">
                    Air Freight
                </a></li>
                <li><a href="/public/sub-services/ocean_frieght.html">
                    Ocean Freight
                </a></li>
            </ul>
        </div>

    )
}

function OurSupport (){
    return (
        <div className=" w-full h-full space-y-7">

            <h3 className=" font-['PT Sans', sans-serif] font-bold text-md text-2xl text-white ">
                Our Support
            </h3>

            <ul className=" text-stone-200 text-sm md:text-base space-y-3 list-image-[url(../imgs/icons/check-mark.png)] list-inside font-semibold">
                <li><a href="/public/service.html">Services</a></li>
                <li><a href="/public/single_blog.html">FAQs</a></li>
                <li><a href="/public/contact_us.html">Contact</a></li>
                <li><a href="/public/about_us.html">Terms & Conditions</a></li>
                <li><a href="/public/about_us.html">Privacy Policy</a></li>
            </ul>
        </div>
    )
}

function ContactInfo (){
    return(            
        <div className="w-full h-full space-y-7">

            <h3 className=" font-['PT Sans', sans-serif] font-bold text-md text-2xl text-white ">
                Contact Info
            </h3>

            {/* <!-- contact info content --> */}
            <div className="pl-1 md:pl-3 space-y-6  mt-4">

                <div className="flex flex-col md:flex-row justify-center md:justify-start  gap-4 ">
                    {/* <!-- Address div --> */}
                    <i className="fa-solid fa-house-user text-[#ee8f00] text-3xl md:text-2xl"></i>

                    {/* <!-- address text --> */}
                    <div>
                        <h4 className="text-white text-sm md:text-xl font-bold ">Address </h4>
                        <p className="text-sm md:text-md text-[#ee8f00] ">99 Roving St., Big City, PKU 23456</p>
                    </div>

                </div>
                
                <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 ">
                    {/* <!-- phone number div --> */}

                    <i className="fa-solid fa-phone text-[#ee8f00] text-3xl md:text-2xl"></i>

                    {/* <!-- address text --> */}
                    <div>
                        <h4 className="text-white text-sm md:text-xl font-bold ">Phone Number </h4>
                        <p className="text-sm md:text-md text-[#ee8f00] ">123-234-1234</p>
                    </div>

                </div>
                
                <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 ">
                    {/* <!-- phone number div --> */}

                    <i className="fa-regular fa-envelope text-[#ee8f00] text-3xl md:text-2xl"></i>

                    {/* <!-- address text --> */}
                    <div>
                        <h4 className="text-white text-sm md:text-xl font-bold ">Email Address </h4>

                        <p className="text-sm md:text-md text-[#ee8f00]">
                            hello@awesomesite.com
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}
