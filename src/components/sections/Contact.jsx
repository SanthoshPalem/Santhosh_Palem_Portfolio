import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Contact Info
            </h2>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span>palemsanthosh3@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-500 text-xl" />
                <span>+91 63097 66065</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <span>Proddatur, Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="flex gap-6 pt-6">
             {/* <a href="mailto:palemsanthosh3@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-xl hover:text-blue-400 transition" />
              </a> */}
              <a href="https://github.com/SanthoshPalem" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl hover:text-blue-400 transition" />
              </a>
              <a href="https://linkedin.com/in/santhosh-palem" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-blue-400 transition" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                type="email"
                name="email"
                required
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white resize-none focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
