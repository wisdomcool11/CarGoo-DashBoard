

export default function ShippingAdmin (){
    return (
        <div>
            <ShippingHero />
            <ShippingBody />
        </div>
    )
}


function ShippingHero (){
    return(
        <section className=" w-full my-14 space-y-14  ">   

            <div className="hero__container shipping__admin--hero w-full h-[13.125rem] 
            md:h-[25rem] flex flex-col md:flex-row gap-7 md:gap-1 justify-center items-center 
            border rounded-b-xl py-24 md:py-0">
                {/* <!-- hero section with a huge image and content on it --> */}
                
                <div className=" w-full text-white pl-6 md:pl-6 space-y-36 "> 

                    <div className=" w-full flex flex-col gap-8 overflow-hidden">

                        {/* <!-- hero content --> */}
                        <h1 className="text-3xl md:text-6xl text-white font-extrabold " data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            CarGoo
                            <span className=" text-[#ee8f00]">Administration</span>
                        </h1>
                    </div>

                </div>{/*  <!-- end of hero section --> */}

            </div>

        </section>
    
    )
}


function ShippingBody (){
    return (
        // <!-- profile -->
        <section className="bg-stone-150 py-20 px-2 md:px-4 w-full md:w-[800px] h-full flex flex-col gap-7 md:mx-auto ">
            
            <div >
                <p className="admin--text ">Whether you oversee dozens or thousands of potential shippers, FedEx Administration helps coordinate, 
                    synchronize and streamline your day-to-day.
                </p>
                <p className="admin--text mt-4">
                    Purpose-built for shipping administrators, FedEx Administration gives you all the power and convenience 
                    you’ve come to expect from FedEx, plus a streamlined interface, intuitive controls and purposeful features 
                    designed with one person in mind – you.
                </p>
            </div>
            
            <div className="grid grid-rows-2 grid-cols-3 justify-center items-center gap-5 ">

                <h2 className="font-normal text-4xl col-span-3 col-start-1 row-start-1 ">
                    {`There's` } no substitute for the right tools
                </h2>
                <p className="admin--text col-span-3  ">
                    FedEx Administration gives you all the capabilities you need to administer an entire shipping department, 
                    no matter its size. And everything’s packaged in a responsive interface that adapts to your workflow and 
                    screen size — it’s built by professionals, for professionals.
                </p>

                <div className="tracking--option-card row-start-3 col-start-3 col-span-2 " >
                    <ul className="tracking--option_card_list admin--text">
                        <li>Multiple administrator contacts</li>
                        <li>Privileges, permissions and preferences at multiple levels</li>
                        <li>Visibility of multiple users and their roles</li>
                        <li>Boolean search capability</li>
                    </ul>
                </div>

                <div className="tracking--option-card row-start-3 col-end-3 col-span-2" >
                    
                    <ul className="tracking--option_card_list admin--text">
                        <li>Ability to change user alias</li>
                        <li>Increased user status visibility</li>
                        <li>Robust account management options</li>
                        <li>SSizeable import and export limits</li>
                    </ul>
                </div>

                <div className="account__payment-card row-start-4 col-start-2 col-end-2 mt-4 " >
                    <a href="#" className= "bg-[#ee8f00] text-white w-[180px] h-[60px] font-bold text-lg flex justify-center items-center rounded-lg">
                        GET STARTED
                    </a>
                </div>
            </div>

        </section>
    )
}

