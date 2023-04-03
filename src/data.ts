import dayjs from "dayjs";
import "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  Experience,
  Skill,
  StackTechnology,
  StackTool,
  Training,
} from "./types";

dayjs.locale("fr");
dayjs.extend(relativeTime);

export const dates = {
  firstExperienceStartDate: "2010-09-01",
  currentExperienceStartDate: "2022-01-19",
};

export const mainExperiences: Experience[] = [
  {
    company: "Leeto",
    companyWebsiteUrl: "https://www.leeto.co",
    jobTitle: "Lead Front-End Developer",
    logoUrl: new URL("./assets/images/leeto-logo.svg", import.meta.url),
    period: `Depuis 2022 • ${dayjs().from(
      dayjs(dates.currentExperienceStartDate),
      true
    )}`,
  },
  {
    company: "MaFormation.fr",
    companyWebsiteUrl: "https://www.maformation.fr",
    jobTitle: "Front-End Developer",
    logoUrl: new URL("./assets/images/maformation-logo.svg", import.meta.url),
    period: "2017/2022 • 5 ans",
  },
];

export const secondaryExperiences: Experience[] = [
  {
    company: "Concept Image",
    companyWebsiteUrl: "https://www.concept-image.fr",
    jobTitle: "Full-Stack Developer",
    period: "2013/2017 • 4 ans",
  },
  {
    company: "3w-online",
    companyWebsiteUrl: "https://www.3w-online.net",
    jobTitle: "Full-Stack Developer",
    period: "2012/2013 • 1 an",
  },
  {
    company: "Maison et Services",
    companyWebsiteUrl: "https://www.maison-et-services.com",
    jobTitle: "UI designer/Intégrateur",
    period: "2010/2012 • 2 ans",
  },
];

export const trainings: Training[] = [
  {
    logoUrl: new URL(
      "./assets/images/universite-tours-logo.svg",
      import.meta.url
    ),
    period: "2011/2012",
    trainingTitle: "Licence Pro. Activité et Techniques de Communication",
    universityName: "Université de Tours",
  },
  {
    logoUrl: new URL(
      "./assets/images/universite-maine-logo.svg",
      import.meta.url
    ),
    period: "2009/2011",
    trainingTitle: "DUT Métiers du Multimédia et de l’Internet",
    universityName: "Université du Maine",
  },
];

export const skills: Skill[] = [
  { title: "Développement Front-End", important: true },
  { title: "Intégration HTML/CSS", important: true },
  { title: "Expérience utilisateur (UX)" },
  { title: "Tests unitaires" },
  { title: "Tests e2e" },
  { title: "DevOps" },
  { title: "Méthode agile" },
];

export const stackTechnologies: StackTechnology[] = [
  {
    logoUrl: new URL("./assets/images/javascript-logo.svg", import.meta.url),
    title: "JavaScript",
    websiteUrl: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    logoUrl: new URL("./assets/images/typescript-logo.svg", import.meta.url),
    title: "TypeScript",
    websiteUrl: "https://www.typescriptlang.org",
  },
  {
    logoUrl: new URL("./assets/images/react-logo.svg", import.meta.url),
    title: "React",
    websiteUrl: "https://reactjs.org",
  },
  {
    logoUrl: new URL(
      "./assets/images/styled-components-logo.svg",
      import.meta.url
    ),
    title: "SC",
    websiteUrl: "https://styled-components.com",
  },
  {
    logoUrl: new URL("./assets/images/sass-logo.svg", import.meta.url),
    title: "Sass",
    websiteUrl: "https://sass-lang.com",
  },
  {
    logoUrl: new URL("./assets/images/webpack-logo.svg", import.meta.url),
    title: "Webpack",
    websiteUrl: "https://webpack.js.org",
  },
  {
    logoUrl: new URL("./assets/images/nodejs-logo.svg", import.meta.url),
    title: "Node.js",
    websiteUrl: "https://nodejs.org",
  },
  {
    logoUrl: new URL("./assets/images/circleci-logo.svg", import.meta.url),
    title: "CircleCI",
    websiteUrl: "https://circleci.com",
  },
  {
    logoUrl: new URL("./assets/images/docker-logo.svg", import.meta.url),
    title: "Docker",
    websiteUrl: "https://www.docker.com",
  },
  {
    logoUrl: new URL("./assets/images/cypress-logo.svg", import.meta.url),
    title: "Cypress",
    websiteUrl: "https://www.cypress.io",
  },
  {
    logoUrl: new URL("./assets/images/jest-logo.svg", import.meta.url),
    title: "Jest",
    websiteUrl: "https://jestjs.io",
  },
];

export const stackTools: StackTool[] = [
  {
    logoUrl: new URL("./assets/images/vscode-logo.svg", import.meta.url),
    title: "VS Code",
    websiteUrl: "https://code.visualstudio.com",
  },
  {
    logoUrl: new URL("./assets/images/eslint-logo.svg", import.meta.url),
    title: "ESLint",
    websiteUrl: "https://eslint.org",
  },
  {
    logoUrl: new URL("./assets/images/prettier-logo.svg", import.meta.url),
    title: "Prettier",
    websiteUrl: "https://prettier.io",
  },
  {
    logoUrl: new URL("./assets/images/storybook-logo.svg", import.meta.url),
    title: "Storybook",
    websiteUrl: "https://storybook.js.org",
  },
  {
    logoUrl: new URL("./assets/images/figma-logo.svg", import.meta.url),
    title: "Figma",
    websiteUrl: "https://www.figma.com",
  },
  {
    logoUrl: new URL("./assets/images/notion-logo.svg", import.meta.url),
    title: "Notion",
    websiteUrl: "https://www.notion.so",
  },
];
