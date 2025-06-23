import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import emailjs from 'emailjs-com';

const Contact = () => {
const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
})
// Replace with your actual public key
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, event.target, import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
            alert("Message sent successfully!");
        }).catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        });
    }
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Get in Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
                placeholder="Your Message"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded bg-blue-500 hover:bg-blue-700 text-white font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
