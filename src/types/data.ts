import { IconProps } from "@radix-ui/react-icons/dist/types";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactInfo {
  href: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  label: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  companyWebsite: string;
  role: string;
  startDate: string;
  endDate: string;
  skills: string[];
  keyResponsibilities: string[];
}

export interface SkillCategory {
  title: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  live_url: string;
  code_repo_url: string;
  thumbnail: string;
  year: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface ICertificate {
  link: string;
  title: string;
  issuer: string;
}

export interface Course {
  link: string;
  title: string;
  issuer: string;
  screenShot: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  description: string;
  startDate: string;
  endDate: string;
}
