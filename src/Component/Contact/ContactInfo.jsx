import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';
import contactImage from '../../assets/contactMail.png'; // Replace with your own image path

const contactDetails = [
    {
        icon: <MdEmail className="text-blue-600 text-xl" />,
        label: 'Email',
        value: 'sohel.dev@example.com',
        href: 'mailto:sohel.dev@example.com',
    },
    {
        icon: <MdPhone className="text-green-600 text-xl" />,
        label: 'Phone',
        value: '+880 1234-567890',
        href: 'tel:+8801234567890',
    },
    {
        icon: <MdWhatsapp className="text-green-500 text-xl" />,
        label: 'WhatsApp',
        value: '+880 1234-567890',
        href: 'https://wa.me/8801234567890',
    },
];

const ContactInfo = () => {
    return (
        <section >
            <div >
                <div className="text-center mb-12 relative">
                    <h2 className="text-4xl font-bold text-gray-900 dim:text-white inline-block relative">
                        Contact Me
                        <motion.div
                            className="absolute left-[60px] bottom-0 h-1 bg-blue-500 rounded-full"
                            style={{
                                width: '80px',
                                transform: 'translateX(-50%)',
                                transformOrigin: 'center',
                            }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: [0, 1, 0] }}
                            transition={{
                                duration: 2,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}j
                        />
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        className="w-full flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={contactImage}
                            alt="Contact Illustration"
                            className="max-w-full w-96 h-auto"
                        />
                    </motion.div>

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
                                className="flex items-center gap-4 p-4 bg-gray-100 dim:bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform"
                            >
                                {item.icon}
                                <div>
                                    <p className="text-sm font-semibold text-gray-800 dim:text-white">
                                        {item.label}
                                    </p>
                                    <p className="text-sm text-gray-600 dim:text-gray-400">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
