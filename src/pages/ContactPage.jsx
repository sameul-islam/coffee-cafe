import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 font-Titillium">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-secondary/80 text-white py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Coffee Cafe</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We'd love to hear from you. Whether it's feedback, questions, or just a hello, reach out and we'll respond as soon as possible.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700">
            Coffee Cafe is always ready to listen to our community. Visit us or send a message using the form.
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Address:</strong> 123 Coffee Street, Brewtown, USA
            </div>
            <div>
              <strong>Email:</strong> info@coffeecafe.com
            </div>
            <div>
              <strong>Phone:</strong> +1 234 567 890
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <div>
              <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full hover:scale-105 transition-transform font-semibold"
            >
              Send Message
            </button>
            {submitted && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          </form>
        </motion.div>
      </section>

      {/* Optional Map Section */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us Here</h2>
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Coffee Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858123456789%3A0xabcdef!2sCoffee+Cafe!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
