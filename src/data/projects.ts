export type Project = {
  title: string;
  techs: string[];
  link: string;
  repoUrl?: string;
  imageUrl?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Weather Forecast CLI",
    techs: ["Python", "API Integration"],
    link: "https://example.com/projects/weather-cli/",
    repoUrl: "https://github.com/username/weather-cli",
    imageUrl: "/assets/images/projectCover.jpg"
  },
  {
    title: "Task Manager App",
    techs: ["React", "TypeScript"],
    link: "https://example.com/projects/task-manager/",
    isComingSoon: true,
  },
  {
    title: "Personal Blog Template",
    techs: ["Astro", "Tailwind CSS"],
    link: "/",
    repoUrl: "https://github.com/username/blog-template",
  },
  {
    title: "Markdown Note Taker",
    techs: ["Electron", "JavaScript"],
    link: "https://example.com/projects/markdown-notes/",
  },
  {
    title: "Fitness Tracker",
    techs: ["Flutter", "Dart"],
    link: "https://example.com/projects/fitness-app/",
    isComingSoon: true,
  },
  {
    title: "E-commerce API",
    techs: ["Node.js", "Express", "MongoDB"],
    link: "/",
    repoUrl: "https://github.com/username/ecommerce-api",
  },
];

export default projects;
