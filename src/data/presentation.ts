export enum SocialType {
  linkedIn = 'LinkedIn',
  gitHub = 'GitHub',
  twitter = 'Twitter',
  email = 'Email',
  instagram = 'Instagram',
}

type SocialMediaPlatform = {
  type: SocialType;
  url: string;
  icon: string;
};

type Presentation = {
  name: string;
  mail: string;
  title: string;
  description: string;
  socialMedia: SocialMediaPlatform[];
};

const socialMediaPlatforms: SocialMediaPlatform[] = [
  {
    type: SocialType.twitter,
    url: 'https://x.com/NakajitoDaniel',
    icon: '/assets/svg/icons/x.svg',
  },
  {
    type: SocialType.gitHub,
    url: 'https://github.com/Nakajito/',
    icon: '/assets/svg/icons/github.svg',
  },
  {
    type: SocialType.email,
    url: 'dabg_@outlook.com',
    icon: '/assets/svg/icons/email.svg',
  },
  {
    type: SocialType.linkedIn,
    url: 'https://www.linkedin.com/in/daniel-bonilla-866b4320a/',
    icon: '/assets/svg/icons/linkedin.svg',
  },
  // {
  //   type: SocialType.instagram,
  //   url: 'https://www.instagram.com/xxx',
  //   icon: '/assets/svg/icons/instagram.svg',
  // },
];

const presentation: Presentation = {
  name: "Daniel Bonilla",
  mail: "dabg_@outlook.com",
  title: "Desrrrollador web",
  description: `
    Profesional proactivo, organizado y orientado a resultados, con habilidades para el <strong class="font-normal text-orange-600">trabajo en equipo </strong>y la adaptación a nuevos entornos. Cuento con experiencia en la gestión de proyectos tecnológicos, desarrollo de sistemas informáticos y análisis de datos. 
    
    Estoy en constante aprendizaje para fortalecer mis  conocimientos en Tecnologías de la Información y Comunicaciones, asegurando eficiencia y calidad en cada tarea.
  `,
  socialMedia: socialMediaPlatforms,
};

export default presentation;
