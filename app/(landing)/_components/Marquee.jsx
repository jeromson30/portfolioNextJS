"use client"
import React from 'react';

const devLanguage = [
    {
        name:"Javascript",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
    },
    {
        name:"Tailwind",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
    },
    {
        name:"ReactJS",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png"
    },
    {
        name:"NextJS",
        logo_url: "/nextjs-icon-svgrepo-com.png"
    },
    {
        name:"NodeJS",
        logo_url: "/nodejs-svgrepo-com.png"
    },
    {
        name:"SASS",
        logo_url: "/sass-svgrepo-com.png"
    },
    {
        name:"Figma",
        logo_url: "/figma-svgrepo-com.png"
    }  
    
]

export default function Marquee() {
    return (
      <>
        <div className='inline-flex w-full max-w-[1040px] text-5xl py-8 mx-auto content-center justify-center  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-300px),transparent_100%)] '>
          <ul className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll'>
            {devLanguage.map((e, index)=>(
                <li key={index}>
                    <img src={e.logo_url} alt={e.name} width="100px"/>
                </li>
            ))}
            {devLanguage.map((e, index)=>(
                <li key={index}>
                    <img src={e.logo_url} alt={e.name} width="100px"/>
                </li>
            ))}
            {devLanguage.map((e, index)=>(
                <li key={index}>
                    <img src={e.logo_url} alt={e.name} width="100px"/>
                </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  