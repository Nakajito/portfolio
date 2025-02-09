export type SkillType =
  | "Programming Languages"
  | "Tools"
  | "Libraries / Framework"
  | "Databases";

export type Skill = {
  name: string;
  icon: string;
  experience?: number;
  colorClass?: string;
};

export type SkillCardProps = {
  skillGroup: Skill[];
  type: SkillType;
};

export enum IconName {
  Angular = "icon-[logos--angular-icon]",
  JS = "icon-[logos--javascript]",
  TS = "icon-[logos--typescript-icon]",
  Java = "icon-[logos--java]",
  Python = "icon-[logos--python]",
  Django = "icon-[logos--django-icon]",
  TailwindCss = "icon-[logos--tailwindcss-icon]",
  Bootstrap = "icon-[logos--bootstrap]",
  React = "icon-[logos--react]",
  Express = "icon-[skill-icons--expressjs-dark]",
  Nest = "icon-[logos--nestjs]",
  Nodejs = "icon-[logos--nodejs-icon]",
  GCP = "icon-[logos--google-cloud]",
  AngularJS = "icon-[devicon--angularjs]",
  Linux = "icon-[logos--linux-tux]",
  Git = "icon-[logos--git-icon]",
  Mysql = "icon-[logos--mysql]",
  Postgresql = "icon-[logos--postgresql]",
  Mongodb = "icon-[logos--mongodb-icon]",
  Docker = "icon-[logos--docker-icon]",
  Vim = "icon-[logos--vim]",
}

export type Skills = SkillCardProps[];

const skills: Skills = [
  {
    type: "Lenguajes de Programación",
    skillGroup: [ 
      {
        name: "JavaScript",
        icon: IconName["JS"],
        colorClass: "text-slate-900 bg-slate-200",
      },
      {
        name: "Python",
        icon: IconName["Python"],
        colorClass: "text-slate-900 bg-slate-200",
      },
    ],
  },
  {
    type: "Framework",
    skillGroup: [
      {
        name: "Django",
        icon: IconName["Django"],
        colorClass: "text-slate-900 bg-slate-200",
      },
      {
        name: "Bootstrap",
        icon: IconName["Bootstrap"],
        colorClass: "text-slate-900 bg-slate-200",
      },
      {
        name: "TailwindCss",
        icon: IconName["TailwindCss"],
        colorClass: "text-slate-900 bg-slate-200",
      },
    ],
  },
  {
    type: "Herramientas",
    skillGroup: [
      {
        name: "Git",
        icon: IconName["Git"],
        colorClass: "text-slate-900 bg-slate-200",
      },
      {
        name: "Docker",
        icon: IconName["Docker"],
        colorClass: "text-slate-900 bg-slate-200",
      },
    ],
  },
  {
    type: "Base de datos",
    skillGroup: [
      {
        name: "PostgreSQL",
        icon: IconName["Postgresql"],
        colorClass: "text-slate-900 bg-slate-200",
      },
      {
        name: "Mysql",
        icon: IconName["Mysql"],
        colorClass: "text-slate-900 bg-slate-200",
      },
    ],
  },
];

export default skills;
