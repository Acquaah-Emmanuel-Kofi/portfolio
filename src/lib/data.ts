import {
  ContactInfo,
  Course,
  Education,
  ICertificate,
  NavLink,
  Project,
  SkillCategory,
  SocialLink,
  WorkExperience,
} from "@/types/data";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  Code,
  Database,
  Server,
  Paintbrush,
  Layers,
  GitBranch,
  FlaskConical,
  Settings2,
  Brain,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  Rss,
  PhoneIcon,
} from "lucide-react";

export const navLinks: NavLink[] = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Articles",
    path: "/articles",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    href: "https://github.com/Acquaah-Emmanuel-Kofi/",
    icon: GitHubLogoIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/acquaah-emmanuel-kofi/",
    icon: LinkedInLogoIcon,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/kofi_waga?s=11",
    icon: TwitterLogoIcon,
    label: "X (Twitter)",
  },
  {
    href: "https://wa.me/233559045947",
    icon: PhoneIcon,
    label: "WhatsApp",
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    company: "Stanbic Bank Ghana",
    companyWebsite: "https://www.stanbic.com.gh/",
    role: "Software Engineer",
    startDate: "Nov 2024",
    endDate: "Present",
    skills: ["Angular", "Angular Material", "Scrum", "Azure Devops"],
    keyResponsibilities: [
      "Redesigned and implemented UI improvements for internal applications such as the Momo Linkage on the staff dashboard and Moby Legal, resulting in more intuitive user experiences and improved productivity for staff.",
      "Collaborated with cross-functional teams to develop and maintain scalable Angular-based frontend applications.",
    ],
  },
  {
    id: "2",
    company: "AmaliTech",
    companyWebsite: "https://amalitech.com/",
    role: "Software Engineer",
    startDate: "Oct 2023",
    endDate: "Oct 2024",
    skills: ["AWS", "Angular", "React", "NgRx"],
    keyResponsibilities: [
      "Adapted to Agile methodologies, actively participating in sprint planning and ensuring clear communication with stakeholders.",
      "Designed and developed web applications using JavaScript and React.",
      "Collaborated with cross-functional teams to deliver high-quality products.",
    ],
  },
  {
    id: "3",
    company: "AmaliTech",
    companyWebsite: "https://amalitech.com/",
    role: "Frontend Developer (Intern)",
    startDate: "Sept 2021",
    endDate: "Nov 2021",
    skills: [
      "React",
      "React Native",
      "Material UI",
      "Tailwind CSS",
      "Agile Methodologies",
    ],
    keyResponsibilities: [
      "During this period with AmaliTech, I had the opportunity to dive into React, which opened up a whole new world of possibilities for me as a developer. I took on the challenge of building a fully functional movie app from scratch, leveraging React's powerful component-based architecture. Not only did I gain a deeper understanding of React's ecosystem, but I also sharpened my skills in state management and styling libraries, like styled-components. This project allowed me to turn complex user requirements into an intuitive and responsive interface, making the app both engaging and easy to navigate. It was a truly rewarding experience that reinforced my passion for building seamless user experiences!",
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Takoradi Technical University",
    degree: "BTech. Computer Software Engineering",
    description:
      "Focused on software engineering, algorithms, and law in I.T. Completed a final year project on Student Industrial Attachment Management System (SIAMS).",
    startDate: "March 2023",
    endDate: "March 2025",
  },
  {
    id: "2",
    institution: "Takoradi Technical University",
    degree: "HND Information Technology",
    description:
      "Focused on software engineering, algorithms, and full-stack web development. Completed a final year project on KampuzSales-Mobile-App.",
    startDate: "Jan 2020",
    endDate: "Jan 2023",
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    items: ["TypeScript", "JavaScript", "Java", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: ["Angular", "Next.js", "React", "React Native"],
  },
  {
    title: "Styling",
    icon: Paintbrush,
    items: [
      "Tailwind CSS",
      "SASS",
      "Bootstrap",
      "Shadcn",
      "Angular Material",
      "MUI",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Next.js", "Prisma", "Drizzle"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "Technologies",
    icon: GitBranch,
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "AWS",
      "Jira",
      "Azure DevOps",
    ],
  },
  {
    title: "State Management",
    icon: Settings2,
    items: ["Redux", "Redux Toolkit", "Zustand", "NgRx", "NgRx Signal Store"],
  },
  {
    title: "Testing & Utilities",
    icon: FlaskConical,
    items: ["Jest", "TanStack Query"],
  },
  {
    title: "Methodologies",
    icon: Brain,
    items: ["Agile", "Scrum"],
  },
];

export const certificates: ICertificate[] = [
  {
    link: "https://www.credly.com/badges/561edc16-684b-4f75-85b1-cd63fac7ecbd",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
  },
  {
    link: "https://www.credly.com/badges/ba8399f0-a9c6-45cd-85c8-072448b7c9b8",
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services Training and Certification",
  },
  {
    link: "https://drive.google.com/drive/folders/1lfCDN7n4UFsigNiFNvCgszbutTVYpKdP",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services Training and Certification",
  },
];

export const courses: Course[] = [
  {
    link: "https://www.sololearn.com/en/certificates/CC-ZXVQNK45",
    title: "Coding Foundations",
    issuer: "Sololearn",
    screenShot: "/certificates/sololearn.jpg",
  },
  {
    link: "https://drive.google.com/file/d/1GGhQ3ITcfCwUtrZQYYzwLeV0jGGn-uLq/view",
    title: "Fundamentals of Web Development",
    issuer: "Amalitech",
    screenShot: "/certificates/amalitech.jpg",
  },
  {
    link: "https://drive.google.com/file/d/1Toeahri0HwgekB4zhZMkWTGbS8ZK_GeG/view",
    title: "Oracle",
    issuer: "Oracle Academy",
    screenShot: "/certificates/oracle.png",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Bancassurance",
    description:
      "An enterprise-grade platform enabling banks to sell insurance products directly to their customers. It streamlines policy creation, customer onboarding, premium payments, and claim management while ensuring compliance with financial regulations.",
    technologies: ["Angular", "Angular Material", "Typescript", "TailwindCSS"],
    live_url: "",
    code_repo_url: "",
    thumbnail: "",
    year: "2024",
  },
  {
    id: "2",
    title: "Community CrowdFunding Platform",
    description:
      "A decentralized crowdfunding platform that empowers communities to raise funds for projects, causes, or emergencies. It features user account management, secure payments, campaign tracking, and real-time updates to promote transparency and engagement.",
    technologies: [
      "Typescript",
      "Angular",
      "TailwindCSS",
      "NgRx",
      "Tanstack Query",
    ],
    live_url: "https://ccp.amalitech-dev.net/",
    code_repo_url: "",
    thumbnail: "",
    year: "2023",
  },
  {
    id: "3",
    title: "WagHub",
    description:
      "A movie app built with React and styled-components, allowing users to browse and search for movies. Features include dynamic content loading, responsive design, and a smooth user experience.",
    technologies: ["Javascript", "React", "Materual UI", "Styled Components"],
    live_url: "https://waghub.netlify.app/",
    code_repo_url: "https://github.com/Acquaah-Emmanuel-Kofi/waghub",
    thumbnail: "/assets/waghub.png",
    year: "2022",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Acquaah-Emmanuel-Kofi/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/acquaah-emmanuel-kofi/",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/kofi_waga?s=11",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/iamkofi.emma?igsh=MWJsNG10N2JlNTg1Nw%3D%3D&utm_source=qr",
    icon: Instagram,
  },
  {
    href: "https://wa.me/233559045947",
    icon: Phone,
    label: "WhatsApp",
  },
  {
    label: "RSS Feed",
    href: "/rss.xml",
    icon: Rss,
  },
];

export const funFacts: string[] = [
  "💻 Life would be much easier if I had the source code.",
  "🧠 Become a programmer, lose your brain's virginity.",
  "🙏 I know H.T.M.L. (How To Meet Lord).",
  "✍️ I blog when inspiration hits or when a bug teaches me something",
  "🎩 If you want to treat women like objects, do it with class.",
];
