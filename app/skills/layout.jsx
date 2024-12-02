"use client"
import Navbar from "../../components/NavBar"
import React, { useState, useEffect } from 'react';

export default function LandingLayout({ children }){
    const [isVisible, setVisible]= useState(false);

    useEffect(() => {
        setVisible(true)
      }, []);

    return(
        <>
            <Navbar view={isVisible}/>
            {children}
        </>
    )
}