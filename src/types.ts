export type Experience = {
  company: string;
  companyWebsiteUrl: string;
  jobTitle: string;
  logoUrl?: URL;
  period: string;
};

export type Training = {
  logoUrl: URL;
  period: string;
  trainingTitle: string;
  universityName: string;
};

export type Skill = { important?: boolean; title: string };

export type StackTechnology = {
  logoUrl: URL;
  title: string;
  websiteUrl?: string;
};

export type StackTool = StackTechnology;
