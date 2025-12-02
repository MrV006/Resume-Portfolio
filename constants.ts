import { Project, Skill } from './types';

export const USER_INFO = {
  name: "امیررضا ویسی",
  enName: "Amirreza Veisi",
  title: "Computer Engineering Student",
  age: 19,
  email: "amirrezaveisi@example.com", // Placeholder - user didn't provide
  github: "https://github.com/MrV006",
  bio: "توسعه‌دهنده فرانت‌اند و دانشجوی مهندسی کامپیوتر. علاقه‌مند به شکستن محدودیت‌های وب و خلق رابط‌های کاربری خاص.",
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Amirreza Portfolio",
    description: "The source code of this high-tech portfolio website. Built with React, Tailwind, and Modern UI principles.",
    tags: ["React", "TypeScript", "Tailwind", "UI/UX"],
    link: "https://github.com/MrV006/Resume-Portfolio",
    image: "",
  }
];

export const SKILLS: Skill[] = [
  { name: "React.Core", level: 90, icon: "react" },
  { name: "TypeScript", level: 85, icon: "ts" },
  { name: "Tailwind_CSS", level: 95, icon: "tailwind" },
  { name: "Next.js", level: 80, icon: "next" },
  { name: "Git_Protocol", level: 85, icon: "git" },
  { name: "UI/UX_Architecture", level: 75, icon: "figma" },
];