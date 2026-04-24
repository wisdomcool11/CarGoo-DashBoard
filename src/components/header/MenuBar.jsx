

export default function MenuBar(){
    return (
        <nav className="">

            <ul className="flex flex-row md:justify-around w-full justify-between md:items-center  ">

                <li className="list_style "><a href="#" className="text-white hover:text-[#ee8f00] md:px-4"> Home </a>
                </li>

                <li className="list_style"><a href="#" >About</a></li>

                <li className="list_style"><a href="#" className=" md:px-4 " >Services</a></li>

                <li className="list_style"><a href="#" className=" md:px-4 ">Blog</a></li>

                <li className="list_style"><a href="#"  className=" md:px-4 ">Contact</a></li>

                {/* <li className="list_style"><a href="#"  className=" md:px-4 ">ship Now</a></li>
                
                <li className="list_style"><a href="#"  className=" md:px-4 ">Track Percel</a></li> */}

            </ul>
        </nav>
    )
}