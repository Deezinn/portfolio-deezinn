'use client';

import { options, tecnologias_cards } from "@/app/_constants/skills";
import { useState } from "react";

export default function Home() {
  const [component, setComponent] = useState<"tec" | "exp" | "lin">("tec");

  const handleClick = (action: "tec" | "exp" | "lin") => {
    setComponent(action);
  };

  return (
    <div className="w-full h-auto flex justify-center bg-orange-50">
      <div className="w-full md:w-1/2 h-auto flex flex-col justify-start p-12 md:px-[135px] md:py-[190px] gap-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Portfolio</h1>

        {/* Bloco de introdução */}
        <div className="w-full h-auto grid md:grid-cols-[2fr_1fr] gap-4 text-justify md:text-start">
          <div className="w-full flex flex-wrap md:flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-semibold">Olá, me chamo André Luiz</h2>
            <p className="text-lg md:text-xl">
              Sou estudante de tecnologia, atualmente estudo e trabalho na{" "}
              <span className="font-bold">Faculdade Senac Pernambuco</span>
            </p>
            <p className="text-lg md:text-xl">
              Hoje eu estou focando no <span className="font-bold">Python</span> como backend e{" "}
              <span className="font-bold">Next.js</span> no frontend
            </p>
          </div>

          <div className="w-full h-50 bg-red-500">
            {/* <Image src={'/foto.jpg'} fill alt="person" className="object-cover" /> */}
          </div>
        </div>

        {/* Seção de Skills */}
        <div className="w-full h-auto flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold">Skills</h1>

          {/* Botões principais */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-2.5 text-sm md:text-xl">
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.action}
                  onClick={() => handleClick(opt.action)}
                  className="w-full md:w-auto h-auto flex flex-row items-center gap-2.5 rounded-full hover:bg-black hover:text-white px-2 py-1 cursor-pointer"
                >
                  <Icon size={20} />
                  <span>{opt.message}</span>
                </div>
              );
            })}
          </div>

          {/* Cards de tecnologias */}
          <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm md:text-lg">
            {tecnologias_cards.map((group, idx) =>
              group.tec.map((card, cidx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={`${idx}-${cidx}`}
                    className="w-full flex flex-row items-center gap-2 p-2 rounded shadow-sm cursor-pointer"
                  >
                    <Icon size={20} />
                    <span className="underline">{card.tecnologia}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
