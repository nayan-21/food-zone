const ContactUs = () =>{
    return(
        <div className="contactUs m-6">
            <h1 className="mb-4">Get in Touch</h1>
            <form>
                <input type="text" className="p-2 m-2 border border-black" placeholder="name"></input>
                <input type="text" className="p-2 m-2 border-black border" placeholder="message"></input>
                <button className="p-2 rounded-lg bg-slate-200">Submit</button>
            </form>

        </div>
    )
}

export default ContactUs;