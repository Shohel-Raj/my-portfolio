import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const contactDetails = [
    {
        icon: <MdEmail className="text-blue-600 text-xl" />,
        label: 'Email',
        value: 'sohel87.dev@gmail.com',
        href: 'mailto:sohel87.dev@gmail.com',
    },
    {
        icon: <MdPhone className="text-green-600 text-xl" />,
        label: 'Phone',
        value: '+880 1647455144',
        href: 'tel:+8801647455144',
    },
    {
        icon: <MdWhatsapp className="text-green-500 text-xl" />,
        label: 'WhatsApp',
        value: '+880 1963687941',
        href: 'https://wa.me/8801963687941',
    },
];

const ContactInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleString();

        const fullData = {
            ...formData,
            time: currentTime,
        };

        toast.promise(
            emailjs.send(
                'service_x89662z',     // ✅ Replace with your actual Service ID
                'template_aiwu7un',    // ✅ Replace with your actual Template ID
                fullData,
                'Lp-IsCBPuUNq6lh6V'      // ✅ Replace with your actual Public Key
            ),
            {
                loading: 'Sending message...',
                success: 'Message sent successfully!',
                error: 'Failed to send message. Try again later.',
            }
        );

        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <section id="contact" className=" py-16">
            <Toaster position="top-right" />
            <div className="text-center mb-12 relative">
                <h2 className="text-4xl font-bold text-gray-900 dim:text-white inline-block relative">
                    Contact Me
                    <motion.div
                        className="absolute left-[60px] bottom-0 h-1 bg-blue-500 rounded-full"
                        style={{ width: '80px', transform: 'translateX(-50%)', transformOrigin: 'center' }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: [0, 1, 0] }}
                        transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                        viewport={{ once: false }}
                    />
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-gray-50 dim:bg-gray-800 p-6 rounded-2xl shadow"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Title & Subtitle */}
                    <div className="text-center space-y-1">
                        <h3 className="text-xl font-semibold text-gray-900 dim:text-white">
                            Send Me a Message
                        </h3>
                        <p className="text-sm text-gray-600 dim:text-gray-400">
                            I’ll get back to you as soon as possible — usually within 24 hours.
                        </p>
                    </div>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg border dim:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dim:bg-gray-700 text-gray-800 dim:text-white"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg border dim:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dim:bg-gray-700 text-gray-800 dim:text-white"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-lg border dim:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dim:bg-gray-700 text-gray-800 dim:text-white"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </motion.form>


                {/* Contact Info */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {contactDetails.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 bg-gray-100 dim:bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform hover:ring hover:ring-blue-400 focus:outline-none focus:ring-2"
                        >
                            {item.icon}
                            <div>
                                <p className="text-sm font-semibold text-gray-800 dim:text-white">
                                    {item.label}
                                </p>
                                <p className="text-sm text-gray-600 dim:text-gray-400">
                                    {item.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactInfo;
