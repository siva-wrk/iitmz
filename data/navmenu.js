const navMenu = [
  { title: "Home", link: "/" },
  {
    title: "Schools",
    link: "",
    submenus: [
      {
        title: "School of Science & Engineering",
        link: "/schools/engineering-and-science/",
        submenus: [
          {
            title: "Program Advisory Committee",
            link: "/schools/engineering-and-science#pac",
          },
          {
            title: "Courses",
            link: "/schools/engineering-and-science#courses",
          },
          {
            title: "Faculty",
            link: "/schools/engineering-and-science#faculty",
          },
        ],
      },
    ],
  },
  { title: "Research", link: "/research/" },
  { title: "Careers", link: "/careers/" },
  { title: "In Media", link: "/media/" },
  { title: "Testimonials", link: "/testimonials/" },
  { title: "Campus Life", link: "/campus-life/" },
  { title: "Admissions", link: "/admission/" },
];

export default navMenu;
