import Landing from "../pages/Landing.vue";
import About from "../pages/About.vue";
import Skills from "../pages/Skills.vue";
import Work from "../pages/Work.vue";
import Talk from "../pages/Talk.vue";
import Projects from "../pages/Projects.vue";
import Contact from "../pages/Contact.vue";

import type { PropType } from "vue";

type Page = { id: string } & Partial<{
  name: string;
  href: string;
  component: PropType<PageProps>;
}>;

export const PAGES: readonly Page[] = [
  {
    id: "landing",
    href: "#landing",
    component: Landing
  },
  {
    id: "about",
    name: "About",
    href: "#about",
    component: About
  },
  {
    id: "skills",
    name: "Skills",
    href: "#skills",
    component: Skills
  },
  {
    id: "work",
    name: "Work",
    href: "#work",
    component: Work
  },
  {
    id: "talk",
    component: Talk
  },
  {
    id: "projects",
    name: "Projects",
    href: "#projects",
    component: Projects
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
    component: Contact
  },
  {
    id: "resume",
    name: "Resume",
    href: "/resume.pdf"
  }
] as const;

export type PageProps = { pageId: string };
