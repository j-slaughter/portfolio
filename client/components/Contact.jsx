/**
 * @module Contact.jsx
 * @description Contact information
 */
import React from 'react';

const Contact = () => {
    return(
        <div className='max-w-[1200px] px-6 mx-auto' id='contact'>
            <div className='grid md:grid-cols-2 place-items-center'>
                <div className='text-slate-300 my-3'>
                    <h2 className='text-3xl font-semibold mb-4'>Contact Me</h2>
                    <p className='text-justify mx-auto'>I'm always seeking opportunities to expand 
                        my skills and explore new technologies. The best way to reach me is through 
                        email or LinkedIn. 
                    </p>
                </div>
                <form action='https://getform.io/f/bkkkqyqb' method='POST'
                className='max-w-6xl p-5 md:p-12'>
                    <p className='text-xl font-bold mb-2'><span>Get in touch!</span></p>
                    <input type='text' id='name' name='name' placeholder='Your Name...'
                    className='formInput'/>
                    <input type='text' id='email' name='email' placeholder='Your Email...'
                    className='formInput'/>
                    <textarea id='message' name='message' cols='30' rows='4' placeholder='Your Message...'
                    className='formInput'/>
                    <button type='submit'
                    className='w-full py-3 rounded-md text-xl text-slate-100 bg-primary-color'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Contact;