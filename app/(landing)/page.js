"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import Image from "next/image";
import Marquee from "../../components/Marquee";

export default function LandingPage() {
  const [isVisible, setVisible]= useState(false);

  useEffect(() => {
      setVisible(true)
    }, []);
  return (
    <main className="flex flex-col w-full h-[87%] select-none">
    <section className={`flex flex-row w-full h-[85%] ${isVisible ? "active" : ""} max-sm:flex-col max-sm:h-[68%] items-center justify-center`}>
        <article className='flex flex-col max-sm:flex-col max-sm:w-full'>
            <h2 className="text-4xl font-extralight text-white leading-relaxed max-lg:text-xl max-sm:w-[100%] max-sm:p-5 max-sm:text-center max-sm:text-xl p-10">
            Bonjour !👋 Je m'appelle Jérôme !<br/>
            Je suis passioné par le web & la tech !</h2>
        </article>
        
        <div className="w-[12%] h-[50%] group bg-black border-0 rounded-t-2xl rounded-b-2xl text-white flex flex-col justify-center cursor-pointer min-w-[350px] max-lg:min-w-[200px] max-sm:min-w-[180px] max-sm:w-[70%] max-sm:h-[70%]">
            <Link href="https://www.linkedin.com/in/jeromecorso30150/" alt="Profil Linkedin" className='w-full h-full' target="_blank">
                <div className="w-full rounded-t-2xl h-full group-hover:h-[50%]max-sm:min-h-[40%] overflow-hidden transition-all duration-300">
                    <Image
                        src={'/profil.jpg'}
                        alt='photo de profil'
                        width={600}
                        height={600}
                        className='h-full w-full rounded-t-2xl scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300'
                    />
                </div>
                <article className='relative overflow-hidden flex-grow rounded-b-2xl bg-black'>
                    <div className='info p-2 h-30 translate-y-0 group-hover:-translate-y-100 transition-all duration-300'>
                        <p className='max-sm:text-base font-semibold'>Jérôme CORSO</p>
                        <p className='max-sm:text-xs text-sm'>Developpeur Web - Avignon, 🇫🇷</p>
                    </div>
                </article>
            </Link>
        </div>
    </section>
    <section className="flex w-full items-start justify-center active max-sm:border-box max-sm:mt-[40px]">
            <Marquee view={isVisible}/>
    </section>
</main>
  );
}
