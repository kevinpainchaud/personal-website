import React from "react";

import { ExperienceCard } from "./components/ExperienceCard/ExperienceCard";
import { ExperienceText } from "./components/ExperienceText/ExperienceText";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemList } from "./components/ItemList/ItemList";
import { Jumbotron } from "./components/Jumbotron/Jumbotron";
import { LogoCard } from "./components/LogoCard/LogoCard";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
import { Tag } from "./components/Tag/Tag";
import { TrainingCard } from "./components/TrainingCard/TrainingCard";
import {
  mainExperiences,
  secondaryExperiences,
  skills,
  stackTechnologies,
  stackTools,
  trainings,
} from "./data";

export const App = () => (
  <div className="max-w-2xl mx-auto px-4 lg:px-0">
    <Header />
    <div className="pb-6 mb:pb-12">
      <Jumbotron />
    </div>
    <div className="mb-8 md:mb-14">
      <div className="mb-4 md:mb-8">
        <SectionTitle>Mes expériences</SectionTitle>
      </div>
      <div className="mb-10">
        <ItemList>
          {mainExperiences.map((mainExperience, index) => (
            <ExperienceCard key={index} {...mainExperience} />
          ))}
        </ItemList>
      </div>
      <p className="mb-6">Mes premières expériences en agences :</p>
      <ItemList>
        {secondaryExperiences.map((secondaryExperience, index) => (
          <ExperienceText key={index} {...secondaryExperience} />
        ))}
      </ItemList>
    </div>
    <div className="mb-8 md:mb-14">
      <div className="mb-4 md:mb-8">
        <SectionTitle>Mes formations</SectionTitle>
      </div>
      <ItemList>
        {trainings.map((training, index) => (
          <TrainingCard
            key={index}
            logoUrl={training.logoUrl}
            period={training.period}
            trainingTitle={training.trainingTitle}
            universityName={training.universityName}
          />
        ))}
      </ItemList>
    </div>
    <div className="mb-8 md:mb-14">
      <div className="mb-4 md:mb-8">
        <SectionTitle>Mes compétences</SectionTitle>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <Tag important={skill.important} key={index}>
            {skill.title}
          </Tag>
        ))}
      </div>
    </div>
    <div className="mb-8 md:mb-14">
      <div className="mb-4 md:mb-8">
        <SectionTitle>Ma stack actuelle</SectionTitle>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6">
        {stackTechnologies.map((stackTechnology, index) => (
          <LogoCard
            href={stackTechnology.websiteUrl}
            key={index}
            label={stackTechnology.title}
            logoUrl={stackTechnology.logoUrl}
          />
        ))}
      </div>
    </div>
    <div className="mb-4 md:mb-8">
      <div className="mb-4 md:mb-8">
        <SectionTitle>Mes outils au quotidien</SectionTitle>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6">
        {stackTools.map((stackTool, index) => (
          <LogoCard
            href={stackTool.websiteUrl}
            key={index}
            label={stackTool.title}
            logoUrl={stackTool.logoUrl}
          />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);
