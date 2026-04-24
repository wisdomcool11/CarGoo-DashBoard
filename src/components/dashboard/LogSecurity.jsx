
import React from "react"

export default function LogSecurity (){
    
    // state variable
    const [isChecked, setChecked] = React.useState(false)

    function handleChange (){

       setChecked(prevCheck => !prevCheck)
       if(isChecked){
            alert("Two Step Verification Disabled ")
       }else{
            alert('Two Step Verification Disabled');
       }
    }

    return(
        <div className="w-full md:w-2/3 h-full mt-20 md:mt-0">

            {/* <!-- content --> */}
            <div className="space-y-4">

                <h2 className="text-xl md:text-5xl font-light text-stone-800">
                    Login & Security
                </h2>

                {/* <!-- icons of calender and listing  --> */}
                <div className="w-full flex items-center gap-1">
                    <i className="fa-solid fa-circle-user "></i> 
                    <h5 className="text-stone-500">Manage your login information, security settings and trusted devices</h5>
                </div>

                <div className="profile--tool__container profile--tool__container-Log 
                profile-log-tool p-4 md:p-8 rounded-xl md:rounded-2xl space-y-8 
                md:space-y-0">

                    {/* <!-- tool card 1 --> */}
                    <div className="tool-card ">
                    <i className="fa-solid fa-circle-user profile-icon"></i> 
                        <h3>Login information</h3>
                        <div className="flex flex-col gap-2">
                            <div className=" font-bold ">
                                USER ID: <span className="ml-4 font-normal ">user name</span>
                            </div>
                            <div className="flex items-center font-bold">
                                PASSWORD: <span className="ml-4 font-normal ">*********</span>
                            </div>
                        </div>
                        <a href="#" className="tool-link self-start text-[#007ab7] font-bold text-xs ">UPDATE</a>
                    </div >

                    {/* <!-- tool card 2  --> */}
                    <div className="tool-card tool-card__two-step-psw">
                    <i className="fa-solid fa-lock profile-icon"></i>
                        <h3>Two-step verification</h3>
                        <p>
                            For enhanced security, we will ask you for your password and a one-time verification code. 
                            Choose when you want to use two-step verification. CarGoo may override these settings and 
                            require verification when we detect suspicious behavior.
                        </p>
                        <a href="#" className="tool-link self-start text-[#007ab7] font-bold text-xs ">ADD</a>
                        <div className="w-full">
                            <h4>Two-step verification at login</h4>

                            <div className="w-full  md:w-[80%] flex justify-between">
                                Enable two-step verification at login.

                                <span className="border-4 border-stone-300 py-1 px-2 rounded-[100%]">
                                    <input 
                                        type="checkbox" 
                                        onChange={handleChange}
                                    />
                                </span>
                            </div>
                        </div>
                    </div >

                    {/* <!-- tool card 3  --> */}
                    {isChecked && <div className="tool-card tool-card__two-step-psw two-step ">

                        <h3>Default verification method</h3>
                        <p>
                            Choose your preferred way to receive your code. You can manage your 
                            email address and phone number(s) on the <a href="/public/user-page/contact_info.html" className="text-stone-500 underline">
                                contact information</a> page.
                        </p>

                        <div className="two-step-box " >
                            <div>
                                <input type="radio" name="verification-method" id="email-check" checked />
                                <label htmlFor="email-check" >Email</label>
                            </div>
                            <p className=" two-step-box-para">wisdomcool11@gmail.com</p>
                        </div>
                        
                        <div className="two-step-box  " >
                            <div>
                                <input type="radio" name="verification-method" id="phone-check" />
                                <label htmlFor="phone-check">Phone</label>
                            </div>
                            <p>
                                Receive your verification code in a text message to your mobile number. 
                                The number must be SMS enabled to receive the reply. By selecting this 
                                method you agree to the CarGoo <a href="/public/user-page/term_&_condition.html" className="text-stone-500 underline" >terms and conditions</a>. Message and data rates 
                                may apply.
                            </p>
                            <p className="two-step-box-para">+234 9065267379</p>
                        </div>

                    </div >}

                </div>
            
            </div>
        </div>
    )
}
