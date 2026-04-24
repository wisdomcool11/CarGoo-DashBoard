

export default function NavBar ({children}){
    return (
        <div className="flex flex-col md:flex-row items-start 
        justify-center md:items-center md:gap-14   
        px-2  md:w-[900px]"
        >
            {children}   
        </div>
    )
}
