import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            // Let the form submit naturally to FormSubmit
            e.target.submit();
        } else {
            validator.showMessages();
        }
    };

    return (
        <form 
            action="https://formsubmit.co/contact@sanlorenzoinvestments.com" 
            method="POST" 
            className="contact-validation-active mx-[-15px] overflow-hidden" 
            id="contact-form-main" 
            onSubmit={(e) => submitHandler(e)}
        >
            {/* FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission from San Lorenzo Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
                <input
                    className='form-control w-full bg-transparent h-[50px] border border-[#ebebeb] text-[#666] transition-all pl-[25px] focus:outline-0 focus:shadow-none focus:border-[#c0b596] focus:bg-transparent'
                    value={forms.name}
                    type="text"
                    name="name"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Your Name" 
                    required />
                {validator.message('name', forms.name, 'required|alpha_space')}
            </div>
            <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
                <input
                    className='form-control  w-full bg-transparent h-[50px] border border-[#ebebeb] text-[#666] transition-all pl-[25px] focus:outline-0 focus:shadow-none focus:border-[#c0b596] focus:bg-transparent'
                    value={forms.email}
                    type="email"
                    name="email"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Your Email" 
                    required />
                {validator.message('email', forms.email, 'required|email')}
            </div>
            <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
                <input
                    className='form-control  w-full bg-transparent h-[50px] border border-[#ebebeb] text-[#666] transition-all pl-[25px] focus:outline-0 focus:shadow-none focus:border-[#c0b596] focus:bg-transparent'
                    value={forms.phone}
                    type="tel"
                    name="phone"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Your phone" 
                    required />
                {validator.message('phone', forms.phone, 'required|phone')}
            </div>
            
            <div className="w-[calc-(100%-25px)] mb-[25px] mx-[15px]">

                <textarea
                    className='form-control  w-full bg-transparent h-[180px] border border-[#ebebeb] text-[#666] transition-all pt-[15px] pl-[25px] focus:outline-0 focus:shadow-none focus:border-[#c0b596] focus:bg-transparent'
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    value={forms.message}
                    name="message"
                    placeholder="Message"
                    required>
                </textarea>
                {validator.message('message', forms.message, 'required')}
            </div>
            <div className="text-center w-full mb-[10px]">
                <button type="submit" className="bg-[#c0b596] text-[#fff] inline-block py-[12px] px-[22px] border border-[#666] rounded-[55px] capitalize transition-all hover:bg-[#666] hover:border-transparent">Get in Touch</button>
            </div>
        </form>
    )
}

export default ContactForm;