

export default function NavButton ({children}){
    return(
        <div className="w-[150px] md:w-80 flex flex-row justify-center items-center
         md:px-4 md:w-42 text-xs md:text-base gap-1 ">
            {children}
        </div>
    )
}


