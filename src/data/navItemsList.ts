export type NavItemType = {
  title: string;
  link: string;
  additionalClasses?: string;
};

const cvUrl = "/assets/cv.pdf";

const navItemsList: NavItemType[] = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Proyectos",
    link: "/projects"
  },
  {
    title: "Descargar CV",
    link: cvUrl,
    additionalClasses: "border-2 rounded-xl p-1 border-orange-500 font-bold",
  }
];

export default navItemsList;
