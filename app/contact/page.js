"use client"
import React, { useState, useEffect } from 'react';

export default function contact(props) {
  const [isVisible, setVisible]= useState(false);

  useEffect(() => {
      setVisible(true)
    }, []);

  return (
    <main className="flex flex-col w-full items-start justify-center select-none mt-10">
            <section className={`flex flex-col w-full items-center justify-center ${isVisible ? "active" : ""} animated`} loading="lazy">
                <h2 className="text-4xl font-bold p-5"><a id='GISkills'>Contact</a></h2>
                <div className="flex flex-col p-10 items-center">
                        <p className="text-xl text-center font-bold">
                            Je suis prêt à relever de nouveaux défis !<br/>N'hésitez pas à me contacter pour discuter d'opportunités passionnantes !"
                        </p>
                        <br/>
                        <p>Email  : <a href="mailto:jerome.corso@gmail.com" target="_blank">jerome.corso@gmail.com</a></p>
                        <p>Linkedin : <a href="https://www.linkedin.com/in/jeromecorso30150/" target="_blank">https://www.linkedin.com/in/jeromecorso30150/</a></p>
                </div>
            </section>
        </main>
  );
}
