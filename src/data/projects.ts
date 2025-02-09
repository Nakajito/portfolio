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
    title: "Generador de contraseñas",
    techs: ["Python"],
    link: "https://example.com/projects/weather-cli/",
    repoUrl: "https://github.com/username/weather-cli",
    imageUrl: "/assets/images/projectCover.jpg",
    isComingSoon: true,
  },
  {
    title: "Bienes Raices",
    techs: ["React", "TypeScript"],
    link: "https://example.com/projects/task-manager/",
    isComingSoon: true,
  },

];

export default projects;
