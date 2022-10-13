import React from "react";

import { Training } from "../../types";

export const TrainingCard = ({
  logoUrl,
  period,
  trainingTitle,
  universityName,
}: Training) => (
  <div className="flex items-center">
    <div className="mr-4 dark:bg-white dark:p-2 dark:rounded-xl">
      <img
        alt={`Logo ${universityName}`}
        className="h-10 w-10 dark:h-12 dark:w-12 md:h-16 md:w-16"
        src={logoUrl.toString()}
      />
    </div>
    <div className="flex flex-1 flex-col justify-center">
      <div className="font-bold text-slate-800 dark:text-white md:mb-1">
        {trainingTitle}
      </div>
      <div className="md:mb-1">{universityName}</div>
      <div>{period}</div>
    </div>
  </div>
);
