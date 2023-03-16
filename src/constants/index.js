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
    threejs,
    tailwindlp,
    rich,
    weatherdashboard,
    readmegenerator,
    workdayscheduler,
    passwordgenerator,
    codequiz,
    weatherpickmeup
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
        "Handled over 500 satisfied customers in 2021, 45% of annual total confirmed deals of whole company.", 
        "Conducted viewings with high conversion rate:  individual conversion rate: 19% vs. team average: 14%.", 
        "Oversaw 5 properties ranging over 600 units of co-living bedrooms to luxury multi-family apartments.", 
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
        "Co-supervision of Australian Winery - Chalkers Crossing: Managed Marketing, Operations, and Strategic Development of an Australian Winery; actively establishing a local presence and expanding its overseas market. Turned loss into profit within a year through detailed inspections of the Winery's managerial culprits, and developed strategies to cut costs and increase profits.",
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
        "Treasury Department: Liaised closely with banks and security firms to monitor company portfolios; controlled mortgage and expense budgeting, also handled Letters of Credit.	Created an electric payment system solution which optimized daily payment efficiency by 75%.",
        "Risk and Compliance Department - Drafted loan agreements, trade facility negotiation letters, board resolutions and evaluated projects vary from real estate projects in China to Iron Ore mines in Australia.",
        "Property Management - Acted as landlord representative to negotiate with agents and tenants. Oversaw the repurposing of a farmland plot and increased its value by 3 folds."
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
    // Card 1
    {
      name: "Tailwind Landing Page",
      description:
        "Web application of a landing page for a company utilizing tailwindCSS along with React app for scalibility and deployment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tailwindlp,
      source_code_link: "https://github.com/damnsemicolon/tailwind-landingpage",
      deployed_link: "https://damnsemicolon.github.io/tailwind-landingpage/"
    },
    // Card 2
    {
      name: "Am I Rich Yet",
      description:
        "A financial tracking app that allows users to keep track of their income and expenses. Built in team effort using React, npm, chart.js, and chakra ui.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "chart.js",
          color: "pink-text-gradient",
        },
        {
          name: "chakra.ui",
          color: "text-[#ff9933]",
        },
      ],
      image: rich,
      source_code_link: "https://github.com/LiliBear1/Financial-Tracking-App",
      deployed_link: "https://chic-swan-b48b65.netlify.app/"
    },
    // Card 3
    {
      name: "Weather Dashboard",
      description:
        "Weather App that you can search for your city and get 5-day weather forecast in an instant. Developed with HTML, CSS, JavaScript and Server API along with jQuery ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "jQuery",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
      ],
      image: weatherdashboard,
      source_code_link: "https://github.com/damnsemicolon/weather-dashboard-shannon",
      deployed_link: "https://damnsemicolon.github.io/weather-dashboard-shannon/"
    },
    // Card 4
    {
      name: "README Generator",
      description:
        "Use Node.js to quickly create a README tailored for YOUR project. Created with JavaScript ES6 & Node.js",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        }
      ],
      image: readmegenerator,
      source_code_link: "https://github.com/damnsemicolon/readme-generator-nodejs",
      deployed_link: "https://github.com/damnsemicolon/readme-generator-nodejs"
    },
    // Card 5
    {
      name: "Workday Scheduler",
      description:
        "Workday Scheudler app that allows you to save and edit your daily schedule, data saved to your device so no need to worry about privacy concerns. Created with HTML, CSS, JavaScript and Third-Party API - jQuery",
      tags: [
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
        {
          name: "CSS3",
          color: "text-[#ff9933]",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "jQuery",
          color: "blue-text-gradient",
        },
      ],
      image: workdayscheduler,
      source_code_link: "https://github.com/damnsemicolon/work-day-scheduler-shannon",
      deployed_link: "https://damnsemicolon.github.io/work-day-scheduler-shannon/"
    },
    // Card 6
    {
      name: "Password Generator",
      description:
        "Web application that gets user preferences through prompts, then generates a random password based on the criteria(s) selected. Created with HTML, CSS, and Javascript",
      tags: [
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
        {
          name: "CSS3",
          color: "text-[#ff9933]",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: passwordgenerator,
      source_code_link: "https://github.com/damnsemicolon/password-generator-shannon",
      deployed_link: "https://damnsemicolon.github.io/password-generator-shannon/"
    },
    // Card 7
    {
      name: "Weather Pick-Me-Up",
      description:
        "Web app that displays the weather dashboard for your searched city, and displays a GIF in relation to the weather that cheers you up. Developed in group effort with OpenMeteo and GIPHI API, bootstrap, and Javscript",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
      ],
      image: weatherpickmeup,
      source_code_link: "https://github.com/stevelab1/weather-pickmeup/",
      deployed_link: "https://stevelab1.github.io/weather-pickmeup/"
    },
    // Card 8
    {
      name: "Javscript Code Quiz",
      description:
        "A fun timed-quiz about Javascript made with HTML, CSS, JavaScript and Web API. *hint* the 3rd option is the answers.",
      tags: [
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
        {
          name: "CSS3",
          color: "text-[#ff9933]",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "webAPI",
          color: "blue-text-gradient",
        },
      ],
      image: codequiz,
      source_code_link: "https://github.com/damnsemicolon/code-quiz-shannon",
      deployed_link: "https://damnsemicolon.github.io/code-quiz-shannon/"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };