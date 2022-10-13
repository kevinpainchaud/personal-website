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
      <span className="font-bold text-slate-800 dark:text-white">
        {jobTitle}
      </span>{" "}
      <a href={companyWebsiteUrl} target="_blank">
        @ {company}
      </a>
    </div>
    <div className="text-sm">{period}</div>
  </div>
);
