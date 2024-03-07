import React, { useState, useEffect, FormEvent } from 'react';

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
        <main className="min-h-screen flex items-center justify-center flex-col pt-15">
            <h1 className="m-4 text-5xl font-bold text-center mb-6">Contact</h1>
            <p className="text-center mb-4">Feel free to reach out to me for any questions or opportunities</p>
            <div className="p-6 rounded shadow-md max-w-md w-full border">
                <h2 className="text-2xl font-bold">Email Me</h2>
                <form className="flex flex-col">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Name</label>
                        <input type="text" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 text-black caret-red-800" placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 text-black caret-red-800" placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Message</label>
                        <textarea className="w-full px-3 py-2 border rounded focus:outline-none text-black caret-red-800" placeholder="Enter Message..." value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                    </div>
                    <div className="mb-4">
                        <button type="submit" className={`w-full py-2 bg-blue-500 text-white rounded ${btnDisabled ? "opacity-75 cursor-not-allowed" : ""}`} onClick={(e) => { handleForm(e) }} disabled={btnDisabled}>Send Message</button>
                    </div>
                    <p className="text-red-800 font-bold text-center">{response}</p>
                </form>
            </div>
        </main>
    );
}

export default Contact;
