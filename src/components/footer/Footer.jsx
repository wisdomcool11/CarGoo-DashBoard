
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

export default function Footer (){
    return (
        // footer section 
        <footer className="bg-stone-800 pt-20 px-2 md:px-8 w-full h-full md:h-full">
            {/* <!-- top footer --> */}

            <FooterTop />

            {/* <!-- down footer --> */}
            <FooterBottom />
        </footer>
    )
}
