

export default function Button ({children}){
    return (
        <button className="bg-[#ee8f00] text-white w-[180px] h-[40px] md:w-[250px] md:h-[60px] 
        font-semibold md:font-bold text-base md:text-lg flex justify-center items-center rounded-lg 
        active:translate-y-[3px] transition ease-in">
            {children}
        </button>
    )
}
