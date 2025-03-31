import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

function Contact() {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const message = useRef(null);
  const [buttonMessage, setButtonMessage] = useState("Send Message");
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Access Key:", import.meta.env.VITE_ACCESS_KEY);
    setButtonMessage("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", access_key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error("Failed to send message");
      } else {
        console.log("Message sent successfully");
        setButtonMessage("Message Sent!");
        name.current.value = "";
        email.current.value = "";
        phone.current.value = "";
        message.current.value = "";
        setTimeout(() => {
          setButtonMessage("Send Message");
        }, 2000);
      }
    } catch (error) {
      alert("Error sending message:", error);
      setButtonMessage("Send Message");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            Get In <span className="text-blue-400">Touch</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                ref={name}
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                ref={email}
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              ref={phone}
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white transition-all"
              placeholder="+977 1234567890"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              ref={message}
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white transition-all"
              placeholder="Hello, I would like to talk about..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg"
          >
            {buttonMessage}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Contact;
