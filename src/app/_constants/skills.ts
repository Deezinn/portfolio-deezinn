import { AiOutlineFileProtect } from "react-icons/ai";
import { BsDeviceHdd } from "react-icons/bs";
import { HiMiniLanguage } from "react-icons/hi2";
import {
  SiPython,
  SiPandas,
  SiFastapi,
  SiPlotly,
  SiLinux,
  SiPostgresql,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface OptionItem {
  icon: IconType;
  message: string;
  action: "tec" | "exp" | "lin";
}

export interface TecnologiaItem {
  icon: IconType;
  tecnologia: string;
}

export interface TecnologiaGroup {
  tec: TecnologiaItem[];
}

export const options: OptionItem[] = [
  {
    icon: AiOutlineFileProtect,
    message: "Tecnologias",
    action: "tec",
  },
  {
    icon: BsDeviceHdd,
    message: "Experiências",
    action: "exp",
  },
  {
    icon: HiMiniLanguage,
    message: "Linguagens",
    action: "lin",
  },
];


export const tecnologias_cards: TecnologiaGroup[] = [
  {
    tec: [
      { icon: SiNextdotjs, tecnologia: "Next.js" },
      { icon: SiPython, tecnologia: "Python" },
      { icon: SiJavascript, tecnologia: "JavaScript" },
      { icon: SiGithub, tecnologia: "GitHub Projects" },
      { icon: SiPlotly, tecnologia: "Plotly" },
      { icon: SiFastapi, tecnologia: "FastAPI" },
      { icon: SiPandas, tecnologia: "Pandas" },
      { icon: SiLinux, tecnologia: "Linux" },
      { icon: SiPostgresql, tecnologia: "PostgreSQL" },
    ],
  },
];
