import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { IoLogoReact } from "react-icons/io5"
import { FaPython } from "react-icons/fa"
import { SiCplusplus, SiMongodb, SiBootstrap, SiCsharp } from "react-icons/si"
import { ImGit } from "react-icons/im"
import smallify from "../images/smallify.png"
import discordbot from "../images/discordbot.png"
import unitygame from "../images/UnityGame.png"
import valorant from "../images/ValorantWebsiteScreen.png"
import political from "../images/politicalatlas.png"
import jesflix from "../images/jesflix.png"

export const languages = [
  {
    key: 1,
    icon: <SiCplusplus></SiCplusplus>,
    name: "C++",
  },
  {
    key: 2,
    icon: <IoLogoJavascript></IoLogoJavascript>,
    name: "Javascript",
  },
  {
    key: 3,
    icon: <FaPython></FaPython>,
    name: "Python",
  },
  {
    key: 4,
    icon: <SiCsharp></SiCsharp>,
    name: "C#",
  },
]

export const technologies = [
  {
    key: 1,
    icon: <ImGit></ImGit>,
    name: "Git",
  },
  {
    key: 2,
    icon: <IoLogoNodejs></IoLogoNodejs>,
    name: "Nodejs",
  },
  {
    key: 3,
    icon: <IoLogoReact></IoLogoReact>,
    name: "React",
  },
  {
    key: 4,
    icon: <SiMongodb></SiMongodb>,
    name: "MongoDB",
  },
  {
    key: 5,
    icon: <SiBootstrap></SiBootstrap>,
    name: "Bootstrap",
  },
]

export const projects = [
  {
    key: 0,
    image: jesflix,
    title: "Jesflix",
    description:
      "Streaming website which allows users to favorite and save movies/tv shows",
    link: "https://github.com/BrianCheung1/jesflix",
    link2: "https://jesflix.vercel.app/",
    tech: [
      "Nodejs",
      "Prisma",
      "MongoDB",
      "Typescript",
      "Nextjs",
      "Tailwind",
      "Vercel",
    ],
  },
  {
    key: 1,
    image: smallify,
    title: "Smallify",
    description:
      "Link shortener which provided users with a permanent link to their destination URL almost instantly.",
    link: "https://github.com/jma8774/Shortener",
    link2: "",
    tech: ["Nodejs", "React", "MongoDB", "Javascript", "CSS", "AntDesign"],
  },
  {
    key: 2,
    image: political,
    title: "Political Atlas",
    description:
      "A website that analyzed the speeches of presidents and displayed their emotions throughout the speech",
    link: "https://github.com/kkhan01/political-atlas",
    link2: "",
    tech: ["Nodejs", "React", "MaterialUI", "D3.js", "Python"],
  },
  {
    key: 3,
    image: discordbot,
    title: "Discord Bot",
    description:
      "A discord bot using Discordpy that has a multitude of commands ranging from games to checking cryptocurrency prices",
    link: "https://github.com/BrianCheung1/DiscordBotpy",
    link2: "",
    tech: ["Python", "Discord API", "Coinbase API"],
  },
  {
    key: 4,
    image: unitygame,
    title: "2D Unity Game",
    description:
      "A game based on unity engine, experience how to control sprite movements and creating various obstacles",
    link: "https://github.com/BrianCheung1/TopDownUnityGame",
    link2: "https://briancheung.itch.io/topdown",
    tech: ["Unity", "C#", "Itch.io"],
  },
]
