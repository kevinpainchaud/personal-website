import React from "react";

import { Experience } from "../../types";

export const ExperienceCard = ({
  company,
  companyWebsiteUrl,
  jobTitle,
  logoUrl,
  period,
}: Experience) => (
  <div className="items-center flex px-4 py-2 ring-1 ring-slate-900/5 rounded-xl shadow-md dark:bg-slate-800 md:p-4">
    <div className="mr-4 dark:bg-white dark:p-1 dark:rounded md:dark:rounded-xl">
      {logoUrl && (
        <img
          alt={`Logo ${company}`}
          className="h-10 w-10 dark:h-6 dark:w-6 md:h-16 md:w-16 md:dark:h-14 md:dark:w-14"
          src={logoUrl.toString()}
        />
      )}
    </div>
    <div className="flex flex-1 flex-col justify-center">
      <div className="md:mb-2">
        <span className="block font-bold text-slate-800 dark:text-white md:inline">
          {jobTitle}
        </span>{" "}
        <a href={companyWebsiteUrl} target="_blank">
          @ {company}
        </a>
      </div>
      <div>{period}</div>
    </div>
  </div>
);
