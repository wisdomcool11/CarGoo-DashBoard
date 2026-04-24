

export default function NavButton ({children}){
    return(
        <div className="w-[200px] flex flex-row justify-between items-center md:px-4 md:w-42 text-xs md:text-base md:w-80 gap-1 ">
            {children}
        </div>
    )
}


