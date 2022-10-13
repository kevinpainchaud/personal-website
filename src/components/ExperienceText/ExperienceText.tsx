import React from "react";

import { Experience } from "../../types";

export const ExperienceText = ({
  company,
  companyWebsiteUrl,
  jobTitle,
  period,
}: Experience) => (
  <div>
    <div className="md:mb-1">
      <span className="block font-bold text-slate-800 dark:text-white md:inline">
        {jobTitle}
      </span>{" "}
      <a href={companyWebsiteUrl} target="_blank">
        @ {company}
      </a>
    </div>
    <div className="text-sm">{period}</div>
  </div>
);
