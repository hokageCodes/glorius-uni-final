
"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import HeroImg from '../../public/assets/hero-img.png';
import Aos from "aos";
import 'aos/dist/aos.css'; // Make sure to import the CSS styles for AOS
import Image from 'next/image';

export default function HeroSection() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="pt-28 flex flex-col overflow-hidden md:flex-row justify-around items-center pt-20 md:pt-32 px-4 md:px-10">
            <div className="flex items-start flex-col gap-4 md:gap-6 max-w-md md:max-w-lg lg:max-w-2xl">
                <h1 className="uppercase font-bold text-2xl md:text-4xl" data-aos="fade-right">
                    Your Quest <span className="text-slate-900"> For </span>
                </h1>
                <h2 className="uppercase font-bold text-slate-900 text-2xl md:text-4xl" data-aos="fade-right" data-aos-delay="100">
                    <span className="text-yellow-400">knowledge </span>Brought You <span className="text-yellow-400">Here</span> 
                </h2>
                <p className="font-semibold text-lg md:text-xl text-slate-700" data-aos="fade-up" data-aos-delay="200">
                    Glorius Vision University, Ogwa, Edo State.
                </p>
                <p className="text-sm md:text-base text-slate-700" data-aos="fade-up" data-aos-delay="300">
                    Your Gateway to success, Access a wealth of past questions on our platform. Elevate your preparation with proven exam insights, topic guidance, and time management practice. Empowering students to excel in exams and embrace a brighter academic future.
                </p>
                <Link legacyBehavior href='/login' data-aos="zoom-in" data-aos-delay="400">
                    <a className="bg-slate-900 hover:bg-slate-700 text-white rounded py-2 px-4 text-sm md:text-lg font-semibold">
                        Get started
                    </a>
                </Link>
            </div>
            <div className="w-full max-w-sm md:max-w-md mt-10 md:mt-0" data-aos="fade-left">
                <Image src={HeroImg} alt="Hero Image" layout="responsive" width={700} height={467} className="rounded-lg" />
            </div>
        </div>
    );
}
