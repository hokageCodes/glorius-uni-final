"use client"
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        matricNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here
        console.log(formData);
        alert('Your message has been submitted!');
    };

    return (
        <div className="mt-16 min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-xl font-semibold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Matric Number</label>
                        <input type="text" name="matricNumber" value={formData.matricNumber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
                </form>
                <div className="mt-6">
                    <h2 className="text-lg font-semibold">You can also reach us at:</h2>
                    <p className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-2" />123 College Street, City</p>
                    <p className="flex items-center text-gray-700"><FaPhone className="mr-2" />+123-456-7890</p>
                    <p className="flex items-center text-gray-700"><FaEnvelope className="mr-2" />contact@example.com</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" className="text-blue-600"><FaFacebook /></a>
                        <a href="https://twitter.com" className="text-blue-400"><FaTwitter /></a>
                        <a href="https://instagram.com" className="text-pink-600"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
