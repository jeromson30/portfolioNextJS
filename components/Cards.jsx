'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import * as Select from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';


export const CardArr = [
    {
      img: '/booki.png',
      title: 'Booki',
      color: '#202020',
      desc: "Projet Booki, création d'une page web responsive à partir d'une marquette Figma aux formats Desktop, Tablette et Mobile"
    },
    {
        img: '/sophiebluel.jpg',
        title: 'Sophie Bluel',
        color: '#202020',
        desc: "Projet Booki, création d'une page web responsive à partir d'une marquette Figma aux formats Desktop, Tablette et Mobile"
      },
      {
        img: '/',
        title: 'Nina Carducci',
        color: '#202020',
        desc: "Réalisation d'un audit de performance et SEO pour le site d'une photographe et optimisation du site web"
      },
      {
        img: 'https://user.oc-static.com/upload/2023/04/03/1680512368252_Kasa%20logo.png',
        title: 'Kasa',
        color: '#202020',
        desc: "Créez une application web de location immobilière avec React."
      },
      {
        img: 'https://user.oc-static.com/upload/2024/02/14/17079003292772_Logo%20%283%29.png',
        title: 'Mon vieux grimoire',
        color: '#202020',
        desc: "Réalisation du backend pour un site web de notation de libre, création d'une API, d'un middleware (JWT, Sharp, Multer)"
      },
      {
        img: '/',
        title: 'Jeromson.fr',
        color: '#202020',
        desc: "Réalisation de mon portfolio, en utilisant React, NextJS, Tailwind, Docker, Mongodb"
      }
  ];

  




function Card2() {
  const [selectedImage, setSelectedImage] = useState(CardArr[0].img);
  const [selectedColor, setSelectedColor] = useState(CardArr[0].color);
  const handleColorButtonClick = (img, color) => {
    setSelectedImage(img);
    setSelectedColor(color);
  };
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <div className='w-[50%] flex flex-wrap gap-5 max-sm:flex-col mt-5'>
      {CardArr.map((data, index) => (
        <div className="w-[300px] h-full max-sm:mt-10" key={index}>
          <div className="bg-gray-100 rounded-lg">
            <div className="w-full h-52 relative">
                <Image src={data?.img} key={index} alt={data?.title} width={100} height={100} className={`absolute h-52 w-full rounded-t-md  object-scale-down  ${selectedColor === data.color ? 'z-10 transition-all duration-500' : 'transition-all delay-500'}`} style={{clipPath:selectedColor === data.color
                        ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%) '
                        : 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%) ',
                  }}
                />
            </div>
            <article className="text-black pt-2  p-2">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl text-blue-500">
                {data?.title}
                </h1>
                {/* <span className="font-medium text-xl text-blue-500">JS - CSS</span> */}
              </div>
              <p className="text-xs pb-2">
                {data?.desc}
              </p>
              <button className="w-full text-white flex justify-center items-center gap-2 bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#3e5068] to-[#0c1970] py-3 rounded-md">
                Afficher le projet
              </button>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
  
}
export default Card2;
