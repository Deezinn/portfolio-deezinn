import Image from "next/image";

export default function Home() {
  return (
  <div className="w-full h-auto">
    <div className="relative w-full h-[250px] flex justify-end items-end">
      <Image src={'/Home/banner.jpg'} fill className="object-cover bg-black px-[400px]" alt="banner"/>
    </div>
    <div className="w-full h-auto p-[100px] flex flex-col gap-5">
      <div className="w-full h-auto">
        <h1 className="text-2xl text-gray-400">Fullstack developer</h1>
        <h2 className="text-5xl text-white">Deezin Dev Portfolio</h2>
      </div>
      <div className="w-full h-auto grid grid-cols-2 gap-[100px]">
        <div className="w-full h-[500px] p-5 border border-white/30 rounded flex flex-col">
        <div className="w-full h-auto">
          <h1 className="text-2xl text-white">Olá, eu me chamo André Luiz!</h1>
        </div>
        </div>
        <div className="w-full h-[500px] p-5 border border-white/30 rounded ">

        </div>

      </div>
    </div>
  </div>
  );
}
