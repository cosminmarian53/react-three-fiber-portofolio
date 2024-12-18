import terminalBackground from "../assets/terminal.png";
import arrowUp from "../assets/arrow-up.png";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send('service_uxl43jh', "template_414ybeo", {
                from_name: form.name,
                to_name: "Cosmin",
                from_email: form.email,
                to_email: "cosminlavric53@gmail.com",
                message: form.message,
            }, "RRmgUfP3jL9C4vaF3");
            alert("Message sent successfully!😁");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (err) {
            alert("Oops! Something went wrong!😢");
            console.log(err);
        }
    }
    //
    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src={terminalBackground} className="absolute inset-0 min-h-screen" alt="terminal-background"/>
                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="text-white-600 text-lg mt-1">I'm currently looking for new opportunities, my
                        inbox is
                        always open. Whether you have a question or just want to say hi, I'll try my best to get back to
                        you!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-3 flex flex-col space-y-5">
                        <div className="flex flex-col space-y-4">
                            <label className="space-y-3">
                                <span className="field-label">Full Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={form.name}
                                    className="field-input"
                                    placeholder="Nick Sordan"
                                />
                            </label>
                            <label className="space-y-3">
                                <span className="field-label">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={form.email}
                                    className="field-input"
                                    placeholder="nicksordan@smth.com"
                                />
                            </label>
                            <label className="space-y-3">
                                <span className="field-label">Your Message</span>
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    value={form.message}
                                    required
                                    rows={5}
                                    className="field-input"
                                    placeholder="Your message here..."
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="field-btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <img src={arrowUp} className="field-btn_arrow" alt="arrow-up"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Contact;