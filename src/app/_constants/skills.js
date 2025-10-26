import { AiOutlineFileProtect } from "react-icons/ai";
import { BsDeviceHdd } from "react-icons/bs";
import { HiMiniLanguage } from "react-icons/hi2";

const options = [
  {
    icon: <AiOutlineFileProtect />,
    message: "Tecnologias",
    action: "tec",
  },
  {
    icon: <BsDeviceHdd />,
    message: "Experiências",
    action: "exp",
  },
  {
    icon: <HiMiniLanguage />,
    message: "Linguagens",
    action: "lin",
  },
];

import { SiPython, SiPandas, SiFastapi, SiPlotly, SiLinux, SiPostgresql, SiGithub, SiJavascript, SiNextdotjs } from "react-icons/si";

export const tecnologias_cards = [
  {
    tec: [
      { image: <SiNextdotjs size={20} />, tecnologia: "Next.js" },
      { image: <SiPython size={20} />, tecnologia: "Python" },
      { image: <SiJavascript size={20} />, tecnologia: "JavaScript" },
      { image: <SiGithub size={20} />, tecnologia: "GitHub Projects" },
      { image: <SiPlotly size={20} />, tecnologia: "Plotly" },
      { image: <SiFastapi size={20} />, tecnologia: "FastAPI" },
      { image: <SiPandas size={20} />, tecnologia: "Pandas" },
      { image: <SiLinux size={20} />, tecnologia: "Linux" },
      { image: <SiPostgresql size={20} />, tecnologia: "PostgreSQL" },
    ],
  },
];


export { options, tecnologias_cards };
