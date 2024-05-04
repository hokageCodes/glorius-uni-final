"use client"
import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

const sections = [
  {
    title: "PermaLinks",
    items: ["Home", "About", "Past Questions", "Contact"],
  },
  {
    title: "Privacy",
    items: ["Privacy Policy", "Terms & Condition"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });  // Initializes AOS and sets the duration of animations
  }, []);

  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-8">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 px-4">
        {sections.map((section, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <h6 className="font-bold uppercase">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2" data-aos="fade-up" data-aos-delay="300">
          <p className="font-bold uppercase">GVU PastQuestions</p>
          <p className="py-4">
            Your Gateway to success, Access a wealth of past questions on our platform. Elevate your preparation with proven exam insights, topic guidance, and time management practice. Empowering students to excel in exams and embrace a brighter academic future.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center" data-aos="fade">
        <p className="text-center text-gray-500 py-4 sm:text-left">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-center sm:justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((item, index) => {
            return <a href={item.link} key={index} className="hover:text-white" data-aos="zoom-in" data-aos-delay={`${(items.length - index) * 100}`}><item.icon /></a>;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
