import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

import {
  GITHUB_USERNAME,
  USER_NAME
} from "./constants/user"

export const greetings: GreetingsType = {
  name: USER_NAME,
  title: "Hi, I'm " + USER_NAME.split(" ")[0],
  description:
    `I am a Senior Software Engineer with 7+ years of professional experience in building high-performance, scalable web applications. My expertise spans front-end and back-end development, with a strong focus on modern JavaScript frameworks, responsive UI, and ecommerce solutions. I specialize in turning ideas into reliable, user-friendly products using React, Next.js, Vue.js, Angular, Node.js, Python, Firebase, PHP, and more.

    I am passionate about writing clean, maintainable code and delivering projects on time with precision. Whether it’s a complex web app, an ecommerce platform, or a dynamic user interface, I bring technical expertise and creative solutions to every project.

    -Frontend: React, Next.js, Vue.js, Angular, Material UI, Bootstrap, Tailwind CSS
    -Backend: Node.js, Python, PHP, Firebase, Supabase
    -Ecommerce Development: Shopify, WordPress, Squarespace
    -Version Control: Git
    -Web Development Best Practices: Responsive design, performance optimization, scalable architecture`,
  resumeLink: "#",
};

export const openSource = {
  githubUserName: GITHUB_USERNAME,
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  github: "https://github.com/alexeirusu2002",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using React.js/Next.js"),
        emoji("⚡ Building RESTful APIs in Node.js/Express.js REST Framework"),
        emoji("⚡ UI development with Material UI, Shadcn, Chakra UI, AntD, and React Bootstrap."),
        emoji("⚡ Styling: Tailwind CSS, SCSS, CSS, Styled Component"),
        emoji("⚡ Database: Mysql, MongoDB"),
        emoji("⚡ Version control with Github/GitLab/BitBucket."),
      ],
      softwareSkills: [
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "logos:express",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Typescript",
          iconifyTag: "logos:typescript",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Vercel",
          iconifyTag: "logos:vercel",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Gitlab",
          iconifyTag: "akar-icons:gitlab-fill",
        },
        {
          skillName: "Bitbucket",
          iconifyTag: "logos:bitbucket",
        },
        {
          skillName: "MaterialUI",
          iconifyTag: "logos:material-ui",
        },
        {
          skillName: "BootStrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
    {
      title: "MVC/CMS Development",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ MVC Frameworks: PHP, Code Igniter, Laravel"),
        emoji("⚡ CMS: Squarespace, Shopify, Wordpress, GoHighLevel, Wix"),
      ],
      softwareSkills: [
        {
          skillName: "Squarespace",
          iconifyTag: "logos:squarespace",
        },
        {
          skillName: "Shopify",
          iconifyTag: "logos:shopify",
        },
        {
          skillName: "Wix",
          iconifyTag: "logos:wix",
        },
        {
          skillName: "Wordpress",
          iconifyTag: "dashicons:wordpress-alt",
        },
        {
          skillName: "GoHighLevel",
          iconifyTag: "akar-icons:gohighlevel-fill",
        },
        {
          skillName: "Php",
          iconifyTag: "logos:php",
        },
        {
          skillName: "CodeIgniter",
          iconifyTag: "logos:codeigniter",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend (7+ years of experience)", //Insert stack or technology you have experience in
    progressPercentage: "100", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend (5+ years of experience)",
    progressPercentage: "95",
  },
  {
    Stack: "CMS (7+ years of experience)",
    progressPercentage: "60",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Center of Excellence for Computer Science",
    subHeader: "",
    duration: "2020 - 2021",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Technical University of Moldova",
    subHeader: "",
    duration: "2022 - 2025",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Software Engineer",
    company: "Endava",
    companyLogo: "data:image/png;base64,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",
    date: "Sep 2021 - Sep 2025",
    desc: "-Developed and maintained large-scale web applications using React, Next.js, and Node.js. \n-Built responsive, high-performance user interfaces with Material UI, Tailwind CSS, and Bootstrap.\n-Built responsive, high-performance user interfaces with Material UI, Tailwind CSS, and Bootstrap.\n-Implemented backend services and APIs in Node.js and Python for dynamic applications.\n-Integrated Firebase for authentication, database, and real-time messaging features.\n-Collaborated with cross-functional teams to deliver complex projects on schedule.",
  },
  {
    role: "Junior Software Engineer",
    company: "Freelance",
    companyLogo: "data:image/png;base64,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",
    date: "Oct 2019 - Jun 2021",
    desc: "-Designed and developed custom web applications and websites for clients.\n-Implemented modern front-end frameworks like React and Vue.js for dynamic interfaces.\n-Assisted in backend development using Node.js and PHP.\n-Maintained project documentation and delivered solutions that met client requirements.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase my work and skills as a software developer.",
    github: "https://github.com/alexeirusu2002/portfolio",
    skills: ["Next.js", "Reactstrap", "Bootstrap", "Github"],
    link: "https://portfolio-projects.vercel.app/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Endava",
    role: "Senior Software Engineer",
    date: "Sep 2021 - Sep 2025",
    feedback:
      "Led delivery of large-scale web applications with React, Next.js, and Node.js. Built performant UI systems, designed APIs, and shipped features end-to-end while collaborating with cross-functional teams.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: USER_NAME,
  description: greetings.description,
  author: USER_NAME,
  image: "/img/photo.jpg",
  // url: "https://portfolio-1hanzla100.vercel.app",
  keywords: [
    USER_NAME.split(" ")[0],
    USER_NAME,
    "@alexeirusu2002",
    "Portfolio",
    USER_NAME.split(" ")[0] + " Portfolio ",
    USER_NAME + " Portfolio",
  ],
};
