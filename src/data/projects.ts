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
    imageUrl: "/assets/images/gen_psw.jpg",
    isComingSoon: true,
  },
  {
    title: "Bienes Raices",
    techs: ["PHP", "SCSS", "HTML", "JavaScript", "MySQL"],
    repoUrl: "https://github.com/Nakajito/Inmuebles",
    link: "https://github.com/Nakajito/Inmuebles",
    imageUrl: "/assets/images/bienes_raices.jpg",
    isComingSoon: false,
  },

];

export default projects;
