import React, { useState, useEffect, FormEvent } from 'react';
import "./Contact.css";
import logo from "../assets/logoOfContact.png";


const Contact: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

    useEffect(() => {
        if(email.includes("@") && name.length > 4 && message.length > 10){
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [name, email, message]);

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();
        
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        };

        try {
            const response = await fetch("/api/mail", requestOptions);
            const data = await response.json();
            setResponse(data.message);
        } catch(err: any) {
            setResponse(err.message);
        }
    };

    return (
        <main className='Main'>
            <div className='Picture-Section' >
           <img src="../assets/logoOfContact.png" alt="" />
            </div>
            <div className='Right-Side'>
                <p className="Contact">Contact us</p>
            <div className="Contect-Section">
                {/* <h2 className="text-2xl font-bold">Email Me</h2> */}
                <form className="details">
                    <div className="mb-4">
                        {/* <label className="block mb-2 text-sm font-medium">Name</label> */}
                        <input type="text" className="Name-Section" placeholder="  Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block mb-2 text-sm font-medium">Email</label> */}
                        <input type="email" className=" Email-Section" placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block mb-2 text-sm font-medium">Message</label> */}
                        <textarea className="Message-Section" placeholder="Enter Message..." value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                    </div>
                    <div className="Submit">
                        <button type="submit" className={`w-full py-2 bg-blue-500 text-white rounded ${btnDisabled ? "opacity-75 cursor-not-allowed" : ""}`} onClick={(e) => { handleForm(e) }} disabled={btnDisabled}>Send Message</button>
                    </div>
                    <p className="text-red-800 font-bold text-center">{response}</p>
                </form>
                <div className='Address-Section'>
                <h3>Contact</h3>
                <p>manish1880@gmail.com</p>
                <br></br>
                <p>CustomerCare:91119154654</p>
                
                </div>
            </div>
            </div>
            
        </main>
    );
}

export default Contact;
