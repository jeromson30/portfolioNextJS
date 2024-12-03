"use client"
import React, { useState, useEffect } from 'react';

export default function skill_page(props) {
  const [isVisible, setVisible]= useState(false);

  useEffect(() => {
      setVisible(true)
    }, []);

  return (
    <main className="flex flex-col w-full items-start justify-center select-none mt-10">
            <section className={`flex flex-col w-full items-center justify-center ${isVisible ? "active" : ""} animated`} loading="lazy">
                <h2 className="text-6xl font-bold p-5"><a id='GISkills'>Mes compétences</a></h2>
                <div className="flex flex-col p-10 items-center">
                        <h3 className="text-3xl font-semibold p-10" >Formation</h3>
                        <p>
                            <span className='uppercase text-fuchsia-600 font-black'>OpenClassroom</span> : Juin 2024 à Décembre 2024 à temps plein<br/>
                            Développeur informatique - Diplôme : licence (Bac +2)
                        </p>
                        <br/>
                        <p>
                            <span className='uppercase text-red-500 font-black'>M2I Formations</span> : 10 Novembre 2024 au 14 Novembre 2014<br/>
                            Formation élaboration d’un cahier des charges (Projet SI)
                        </p>
                        <br/>
                        <p>
                            <span className='uppercase text-red-500 font-black'>M2I Formations</span> : Juin 2014<br/>
                            Formation développement informatique langage C#
                        </p>
                </div>
                <div className="flex flex-row items-start justify-center p-4 max-sm:flex-col">
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
        </main>
  );
}
