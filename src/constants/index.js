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
  bluebird,
  byjus,
  zemoso,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Backend Developer",
    icon: backend,
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
    title: "Android Automation Analyst intern",
    company_name: "BlueBird India Pvt Ltd",
    icon: bluebird,
    iconBg: "#FFFFFF",
    date: "March 2020 - June 2020",
    points: [
      "Developed python scripts to be able to automate features on the Android Enterprise devices using Robot Framework and RIDE.",
    ],
  },
  {
    title: "Software Engineer (Module Lead)",
    company_name: "BYJU'S",
    icon: byjus,
    iconBg: "#813588",
    date: "Oct 2020 - Dec 2022",
    points: [
      "Developed and maintained an inventory management web application for warehouse members and product managers using React.js & Node.js leveraging MongoDB & PostgreSQL database.",
      "Developed a warehouse management system over the existing inventory management system that augmented the functionality of the former.",
      "Developed an order management system that tracks sales, orders, and fulfilment using React, express and Node. And MongoDB for database.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Member of Technical panel for team recruitment.",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "Zemoso Technologies",
    icon: zemoso,
    iconBg: "#f46e57",
    date: "Dec 2022 - Aug 2023",
    points: [
      "Built Minet which is a digital payment platform that enables user to buy & sell cryptocurrencies and also maintain a portfolio using React, Typescript, SpringBoot and test cases on jest.",
      "Developed Seeder which supports small/mid-sized businesses/startups to secure necessary funding to expand their operations. React, Typescript, Springboot were used.",
      "Conducted comprehensive code testing to ensure compliance with product specifications and to identify the product and address any flaws and issues.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Warehouse Management System",
    description:
      "An internal web app to maintain operations in the warehouse. From producing inventories to updating each inventory's status and analyzing orders coming from the order management app to setting up and shipping the inventories out of the warehouse to the customer via a delivery partner.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Order Management System",
    description:
      "An internal web application that tracks sales, orders, and fulfilment. It includes product information, order details, order status, shipment status, invoices, etc. From associating a shipment SKU to associating inventories to orders to shipping the orders and delivering it to the customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Minet",
    description:
      "Minet is a digital payment platform that enables users to buy and sell cryptocurrencies, providing them with an easy and secure way to invest in and trade these assets. The platform offers users convenient management of their cryptocurrency portfolios and provides insightful chart representations to stay up-to-date on the latest market trends.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Seeder",
    description:
      "Seeder is a digital funding platform that supports small/mid-sized businesses and startups in securing the necessary funding to expand their operations. This web-based application provides access to Growth capital through a group of individual investors, offering reliable and convenient way to achieve their growth objectives.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Springboot",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Cypress",
        color: "green-text-gradient",
      },
      {
        name: "Jest",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
