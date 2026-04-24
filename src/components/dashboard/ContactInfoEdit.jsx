

export default function ContactInfoEdit (props){

    const{setEdit} = props;

    function handleSaveEdit (){
        setEdit(prevEdit => !prevEdit)
    }

    return (
        <div className="w-full md:w-2/3 h-full mt-20 md:mt-0 ">

            {/* <!-- content --> */}
            <div className="space-y-4">

                <h2 className="text-3xl md:text-5xl 
                font-light text-stone-800 ">
                    Contact Information
                </h2>

                <div className="profile--tool__container_edit  ">

                    {/* <!-- tool card 1 --> */}
                    <div className="tool-card tool-card_edit contact--info__card ">

                        <i className="fa-solid fa-circle-user profile-icon"></i> 
                        <h3>Contact name and address</h3>

                        <form action="#" id="js-contact-form_edit" className="contact-form_edit">

                            <div className="flex justify-around items-center gap-6 py-3 mb-6">
                                {/* <!-- first name --> */}
                                <div className="input-control">
                                    <label htmlFor="firstName-edit" className="input-label">First Name</label>
                                    <div>
                                        <input type="text" placeholder="Wisdom" id="firstName-edit" name="firstName-edit" />
                                        <div className="error"></div>

                                    </div>
                                </div>
                            
                                {/* <!-- last name --> */}
                                <div className="input-control">
                                    <label htmlFor="lastName-edit" className="input-label">Last Name</label>
                                    <div>
                                        <input type="text" placeholder="Aghabie" id="lastName-edit" name="lastName-edit" />
                                        <div className="error"></div>

                                    </div>
                                </div>

                            </div>

                            {/* <!-- country/territory --> */}
                            <div className="input-control choose-country">
                                <label htmlFor="country-edit" className="input-label">Country/Territory</label>
                                <div>
                                    <select name="nig" id="country" className="border-2 p-2 " >
                                        <option value="nig" >NIG</option>
                                        <option value="uk">UK</option>
                                        <option value="use">USA</option>
                                        <option value="can">CA</option>
                                        <option value="aug">AST</option>
                                    </select>
                                    <div className="error"></div>

                                </div>
                            </div>

                            {/* <!-- Address line 1 --> */}
                            <div className="input-control">
                                <label htmlFor="address1-edit" className="input-label">Address Line 1</label>
                                <div>
                                    <input type="text" placeholder="Optional..." id="address1-edit" name="address-edit" />
                                    <div className="error"></div>
                                </div>
                            </div>

                            {/* <!-- Address line 2 --> */}
                            <div className="input-control">
                                <label htmlFor="address2-edit" className="input-label">Address Line 2(Optional)</label>
                                <div>
                                    <input type="text" placeholder="Optional..." id="address2-edit" name="address2-edit" />
                                    <div className="error"></div>

                                </div>
                            </div>

                            {/* <!-- Postal code--> */}
                            <div className="input-control">
                                <label htmlFor="postal_code" className="input-label">Postal code (Optional)</label>
                                <div>
                                    <input type="text" placeholder="900001" id="postal_code" name="postal_code" />
                                    <div className="error"></div>
                                </div>
                            </div>

                            {/* <!-- City--> */}
                            <div className="input-control">
                                <label htmlFor="city" className="input-label">City</label>
                                <div>
                                    <input type="text" placeholder="Ikeja" id="city" name="city" />
                                    <div className="error"></div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    {/* <!-- primary number --> */}
                                    <div className="input-control">
                                        <label htmlFor="country_code" className="input-label">Country Code</label>
                                        <div>
                                            <input type="text" id="city" name="country_coode" placeholder="+234" />
                                            <div className="error"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="input-control">
                                        <label htmlFor="primary_phone" className="input-label">Primary Phone Number</label>
                                        <div>
                                            <input type="text"  id="primary_phone" name="primary_phone" placeholder="8012345678" />
                                            <div className="error"></div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    {/* <!-- secondary number --> */}
                                    <div className="input-control">
                                        <label htmlFor="country_code" className="input-label">Country Code</label>
                                        <div>
                                            <input type="text" id="city" name="country_coode" placeholder="+234" />
                                            <div className="error"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="input-control">
                                        <label htmlFor="secondary_phone" className="input-label">Secondary Phone Number(Optional)</label>
                                        <div>
                                            <input type="text"  id="secondary_phone" name="secondary_phone" placeholder="8012345678" />
                                            <div className="error"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- email --> */}
                            <div className="input-control">
                                <label htmlFor="email-edit" className="input-label">Email</label>
                                <div>
                                    <input type="text" placeholder="@mail.com" id="email-edit" name="email-edit" />
                                    <div className="error"></div>
                                </div>
                            </div>
                            
                            {/* <!-- submit button --><!-- submit button --> */}
                            <button 
                                type="submit" 
                                id="form-btn" 
                                className="bg-[#ee8f00] text-white w-[180px] h-[60px] 
                                font-bold text-lg flex justify-center items-center rounded-lg"
                                onClick={handleSaveEdit}
                            >
                                Submit
                            </button>
                        </form>

                    </div >

                </div>
            
            </div>
        </div>
    )
}

