import React from 'react';
import backgorund from '../../../assets/background/backround.jpeg'
import { toast } from 'react-hot-toast';
const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        toast.success('Your comment has been submitted')
    }
    return (
        <div className='py-3 md:py-6'
        style={
            {background:`url(${backgorund})`}
        }
        >
            <div className='text-center my-6'>
                <h2 className='text-xl text-white font-bold'>Contact Us</h2>
                <p className='text-2xl md:text-3xl text-base'>Stay connected with us</p>
            </div>
           <form onSubmit={handleSubmit}>
           <div className='w-3/4 md:w-1/2 mx-auto'>
                <div className="form-control">
                <input type="text" placeholder="Email address" className="input input-bordered" />
                </div>
                <div className="form-control">
                <input type="text" placeholder="Subjects" className="input input-bordered my-4" />
                </div>
                <div className="form-control">
                    <textarea className="textarea textarea-bordered" placeholder='Your Message' id="" cols="20" rows="5"></textarea>
                </div>
                  <div className='text-center my-6'>
                    <input type="Submit" className='border-2 border-l-none border-brown text-white px-6 py-2 hover:bg-brown hover:text-white transition-all book-room'/>
                  </div>
            </div>
           </form>
        </div>
    );
};

export default Contact;