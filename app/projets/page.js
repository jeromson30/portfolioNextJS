"use client"
import React, { useState, useEffect } from 'react';
import Card from "../../components/Cards";

export default function skill_page(props) {
  const [isVisible, setVisible]= useState(false);

  useEffect(() => {
      setVisible(true)
    }, []);

  return (
    <main className="flex flex-col w-full items-start justify-center pt-8 select-none">
            <section className={`flex flex-col w-full items-center justify-between ${isVisible ? "active" : ""} animated`}>
                <h2 className="text-6xl font-bold leading-relaxed">Mes projets</h2>
                <div className="flex flex-row justify-around p-4">
                    <Card />
                </div>
            </section>
        </main>
  );
}
