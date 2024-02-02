import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bilgeadam,
  nurolteknoloji,
  baykar,
  tuc,
  insighthr,
  shop,
  nativeapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "BilgeAdam Technology",
    icon: bilgeadam,
    iconBg: "#383E56",
    date: "December 2023 - Present",
    points: [
      "Designing and developing an educational portal for React and .NET Web API technologies at BilgeAdam Technology.",
      "Working in close collaboration with educators to create engaging and interactive learning modules.",
      "Ensuring the educational platform is accessible and user-friendly across various devices and browsers.",
      "Leading the front-end development with React.js, while integrating with backend services using .NET Web API.",
      "Maintaining and updating the portal to include the latest features and technologies in web development.",
    ],
  },
  {
    title: "Mechanical and Electrical Maintenance Engineer",
    company_name: "Nurol Technology",
    icon: nurolteknoloji,
    iconBg: "#E6DEDD",
    date: "January 2021 - July 2023",
    points: [
      "Oversaw the mechanical and electrical maintenance and repair operations within Nurol Technology.",
      "Collaborated with engineering teams to ensure the reliability and efficiency of mechanical and electronic systems.",
      "Conducted regular inspections and implemented preventive maintenance schedules to reduce downtime.",
      "Managed emergency response strategies for equipment failures and coordinated swift repair actions.",
      "Played a pivotal role in the continuous improvement of maintenance processes and the integration of new technologies.",
    ],
  },
  {
    title: "Avionics Design Engineer",
    company_name: "Baykar Technology",
    icon: baykar,
    iconBg: "#383E56",
    date: "July 2020 - September 2022",
    points: [
      "Led the avionics design and integration for cutting-edge unmanned aerial vehicles at Baykar.",
      "Collaborated with multidisciplinary teams to develop robust avionics systems that meet strict aerospace standards.",
      "Implemented rigorous testing protocols to ensure system reliability and compliance with flight regulations.",
      "Innovated avionics solutions that enhanced the performance and safety of unmanned aerial systems.",
    ],
  },
  {
    title: "Innovative Design Instructor",
    company_name: "Türkiye Teknoloji Takımı",
    icon: tuc,
    iconBg: "#E6DEDD",
    date: "March 2019 - August 2019",
    points: [
      "Conducted workshops and training sessions on innovative design principles and practices for technology enthusiasts and professionals.",
      "Facilitated hands-on learning experiences in design thinking and rapid prototyping to foster creativity and problem-solving skills.",
      "Collaborated with a team of designers and educators to develop a curriculum that bridges the gap between theory and practical application.",
      "Mentored participants in developing their own technology projects, providing guidance on user experience and functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mükemmel dizayn anlayışı ile yaptığımız projeye kattığın renk, gerçekten muazzam oldu. Senin gibi bilgi, beceri ve donanımlı biriyle çalışmak benim için büyük bir zevkti. Kariyerindeki başarıların devamını dilerim.",
    name: "Muhammed Dereli",
    designation: "Co-Founder",
    company: "APP-GI",
    image:
      "http://muhammeddereli.online/assets/img/Ads%C4%B1z%20tasar%C4%B1m.png",
  },
  {
    testimonial:
      "Harika bir ekip oyuncusu! Tasarım yetenekleri, projelerimize özgün ve estetik bir dokunuş katarken, aynı zamanda ekip ruhunu güçlendiriyor. Her zaman sorumluluk alır ve takımın başarısı için elinden gelenin en iyisini yapar.",
    name: "Hülya Gümüş",
    designation: "HR Specialist",
    company: "MLP Care",
    image: "http://insight.muhammeddereli.com/maindesign/img/team/hulya3.png",
  },
  {
    testimonial:
      "Proje yönetimi ve problem çözme becerileriyle, zorlu süreçlerde dahi projelerimizi başarıyla yönlendirdi ve önemli katkılarda bulundu. İletişim becerileri ve ekip içi uyumu sayesinde, projemizde etkili çözümler üretti. ",
    name: "Anonymous",
    designation: "Full Stack Developer",
    company: "123 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HRMS SaaS Platform",
    description:
      "HR management SaaS platform designed with C#, Entity Framework, ASP.NET Core 7.0 MVC, MsSQL, Entity Framework featuring Azure cloud DevOps deployment and multi-tier user access.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "entityframework",
        color: "green-text-gradient",
      },
      {
        name: "aspnetcore",
        color: "pink-text-gradient",
      },
    ],
    image: insighthr,
    source_code_link: "https://github.com/cemsener/InSight-HR",
    live_link: "http://insight.muhammeddereli.com/",
  },
  {
    name: "3D Tshirt Customizer",
    description:
      "A modern e-commerce platform developed using Three.js that offers dynamic 3D t-shirt design features. Users can customize their own t-shirts in 3D and experiment with different fabric and pattern options.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/cemsener/3d_shop_ai",
    live_link: "http://cemsener.online/",
  },
  {
    name: "React Native Jobs App",
    description:
      "Comprehensive mobile application developed with React Native, incorporating Redux for state management and NativeBase for UI components. Offers seamless job searching functionalities.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "nativebase",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: nativeapp,
    source_code_link: "https://github.com/cemsener/react_native_job",
    live_link:
      "https://expo.dev/accounts/cemsener/projects/cemsener/updates/d4331722-eb68-4b5e-ae23-d45ee3a1457a",
  },
];

export { services, technologies, experiences, testimonials, projects };
