'use client'

import { options, tecnologias_cards } from "@/app/_constants/skills";
import { useState } from "react";

export default function Home() {
  const [component, setComponent] = useState<string>('tec');

  const handleClick = (action: string) => {
    setComponent(action);
  };

  return (
    <div className="w-full h-screen flex justify-center bg-orange-50">
      <div className="w-1/2 h-screen flex flex-col justify-start px-[135px] py-[190px] gap-16">

        <h1 className="text-4xl font-semibold">Portfolio</h1>
        <div className="w-full h-[200px] grid grid-cols-[2fr_1fr] gap-4">
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Olá, me chamo André Luiz</h2>
            <p className="text-xl">
              Sou estudante de tecnologia, atualmente estudo e trabalho na{" "}
              <span className="font-bold">Faculdade Senac Pernambuco</span>
            </p>
            <p className="text-xl">
              Hoje eu estou focando no <span className="font-bold">Python</span> como backend e{" "}
              <span className="font-bold">Next.js</span> no frontend
            </p>
          </div>
          <div className="w-full h-auto bg-red-500">
            {/* <Image src={'dasda'} fill alt="person" className="object-cover" /> */}
          </div>
        </div>

        <div className="w-full h-auto flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Skills</h1>

          <div className="w-full flex flex-row gap-2.5 text-xl">
            {options.map((opt, idx) => (
              <div
                key={idx}
                className="w-auto h-auto flex flex-row items-center gap-2.5 rounded-full hover:bg-black hover:text-white px-2 py-1 cursor-pointer"
              >
                {opt.icon}
                <button onClick={() => handleClick(opt.action)}>{opt.message}</button>
              </div>
            ))}
          </div>

          <div className="w-full h-auto grid grid-cols-3 gap-4 mt-4">
            {tecnologias_cards.map((opt, idx) =>
              opt[component]?.map((card, cidx) => (
                <div
                  key={cidx}
                  className="w-full flex flex-row items-center gap-2 p-2 rounded shadow-sm cursor-pointer"
                >
                  {card.image}
                  <span className="text-lg underline">{card.tecnologia}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
