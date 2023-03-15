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
    weave,
    generalnice,
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
      title: "React Native Developer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Senior Sales Executive",
      company_name: "Weave Living",
      icon: weave,
      iconBg: "#fff",
      date: "Nov 2018 - Sep 2022",
      points: [
        "Achieved Individual Sales of HKD23.4M (GBP2.6M) in 2021 under COVID, >40% contribution of team of 5", 
        "Handled over 500 satisfied customers in 2021, 45% of annual total confirmed deals of whole company", 
        "Conducted viewings with high conversion rate:  individual conversion rate: 19% vs. team average: 14%", 
        "Oversaw 5 properties ranging over 600 units of co-living bedrooms to luxury multi-family apartments", 
        "Cross-team champion for initiatives, pricing, license agreement drafting, finance operation, events ideation, marketing involvement, market research, customer engagement, etc.", 
        "Developed the Leasing Team from 1-man-band to 5 team members."

      ],
    },
    {
      title: "Senior Officer",
      company_name: "General Nice Resources (Hong Kong) Limited",
      icon: generalnice,
      iconBg: "#ffffff",
      date: "Dec 2016 - Nov 2018",
      points: [
        "Co-supervision of Australian Winery - Chalkers Crossing: Managed Marketing, Operations, and Strategic Development of an Australian Winery; actively establishing a local presence and expanding its overseas market. Turned loss into profit within a year through detailed inspections of the Winery's managerial culprits, and developed strategies to cut costs and increase profits",
        "Property Management: In charge of Property Management Department for all 31 HK properties of General Nice Group. Scope includes property management, leasing, and liaising with tenants. Complements received by repairing clashing relationships between tenants and predecessor. Completed the sale of 5 properties in UK and Singapore."
      ],
    },
    {
      title: "Associate",
      company_name: "General Nice Resources (Hong Kong) Limited",
      icon: generalnice,
      iconBg: "#ffffff",
      date: "Aug 2012 - Dec 2016",
      points: [
        "Treasury Department: Liaised closely with banks and security firms to monitor company portfolios; controlled mortgage and expense budgeting, also handled Letters of Credit.	Created an electric payment system solution which optimized daily payment efficiency by 75%",
        "Risk and Compliance Department - Drafted loan agreements, trade facility negotiation letters, board resolutions and evaluated projects vary from real estate projects in China to Iron Ore mines in Australia",
        "Property Management - Acted as landlord representative to negotiate with agents and tenants. Oversaw the repurposing of a farmland plot and increased its value by 3 folds"
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };