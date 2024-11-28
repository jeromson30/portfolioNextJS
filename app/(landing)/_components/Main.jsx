"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Marquee from "./Marquee";
import Card from "./Cards";


export default function Main(){
    return(
        <main className="flex flex-col w-full items-start justify-center pt-8 select-none mx-auto mt-20">
            <section className="flex flex-row w-full h-[460px] items-center justify-center">
                <article className='w-[25%] h-full group text-white flex flex-col pl-10 justify-center'>
                    <h2 className="text-4xl font-extralight leading-relaxed">Salut!👋<br/>
                    Je m'appelle Jérôme<br/>
                    Je dev pour le web !</h2>
                    {/* <Globe /> */}
                </article>

                <article className='w-[300px] h-[330px] group bg-black border-0 rounded-md text-white flex flex-col justify-center'>
                    <div className='w-full rounded-t-2xl h-[250px] group-hover:h-[310px] overflow-hidden transition-all duration-300'>
                    <Image
                        src={'/profil.jpg'}
                        alt='photo de profil'
                        width={600}
                        height={600}
                        className='h-full w-full rounded-t-2xl scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300 '
                    />
                    </div>
                    <article className='relative overflow-hidden flex-grow rounded-b-2xl'>
                        <div className='info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300'>
                            <p className='md:text-2xl font-semibold'>Jérôme CORSO</p>
                            <p className='sm:text-base text-sm'>Developpeur Web </p>
                            {/* &amp; CEO  */}
                        </div>
                        <button className='absolute h-10 -bottom-8 opacity-0 text-rose-400 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center'>
                            Developpeur Web 
                        </button>
                    </article>
                </article>
            </section>
            <section className="flex flex-row w-full items-start justify-center mt-20">
                    <Marquee />
            </section>
            <section className="flex flex-col w-full items-center justify-center mt-20">
                <h2 className="text-6xl font-bold p-5"><a id='GISkills'>Compétences</a></h2>
                <div className="flex flex-col p-10 items-center">
                        <h3 className="text-3xl font-semibold p-10" >Formation</h3>
                        <p>
                        Juin 2024 à Décembre 2024<br/>
                        OpenClassroom - Développeur informatique<br/>
                        Diplome : licence (Bac +2)<br/>
                        Déscriptif :<br/>
                        </p>
                </div>
                <div className="flex flex-row items-start justify-center p-4">
                    <div className="flex flex-col p-10 items-center">
                        <h3 className="text-3xl font-semibold p-10" >Front-end</h3>
                        <ul>
                            <li className='flex flex-row leading-10 items-center justify-center'><img src="/reactjs.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>ReactJS</p></li>
                            <li className='flex flex-row leading-10 items-center justify-center'><img src="/sass.svg" alt="SASS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>SASS</p></li>
                            <li className='flex flex-row leading-10 items-center justify-center'><img src="/tailwindcss.svg" alt="SASS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>Tailwind</p></li>
                            <li className='flex flex-row leading-10 items-center justify-center'><img src="/next.svg" alt="NextJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>NextJS</p></li>
                        </ul>
                    </div>
                    <div className="flex flex-col p-10 items-center">
                        <h3 className="text-3xl font-semibold p-10">Back-end</h3>
                        <ul>
                        <li className='flex flex-row leading-10 items-center justify-center'><img src="/nodejs.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>NodeJS</p></li>
                        <li className='flex flex-row leading-10 items-center justify-center'><img src="/express.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>Express</p></li>
                        <li className='flex flex-row leading-10 items-center justify-center'><img src="/mongodb.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>MongoDB</p></li>
                        <li className='flex flex-row leading-10 items-center justify-center'><img src="/postgresql.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>PostgreSQL</p></li>
                        </ul>
                    </div>
                    <div className="flex flex-col p-10 items-center">
                        <h3 className="text-3xl font-semibold p-10">Outils</h3>
                        <ul>
                            <li className='flex flex-row leading-10 items-center justify-center'><img src="/figma.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>Figma</p></li>
                            <li className='flex flex-row leading-10 items-center justify-center'><img src="/github.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>Github</p></li>
                            <li className='flex flex-row leading-10 items-center justify-center'><img src="/postman.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>Postman</p></li>
                            <li className='flex flex-row leading-10 items-center justify-center'><img src="/lighthouse.svg" alt="ReactJS" loading="lazy" className='w-[55px] h-[55px]'/><p className='p-4'>Lighthouse</p></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-full items-center justify-between mt-20">
                <h2 className="text-6xl font-bold leading-relaxed">Projets</h2>
                <div className="flex flex-row justify-around p-4">
                    <Card />
                </div>
            </section>
        </main>
    )
}

