import React, { ReactNode } from "react";

import "./section-title.scss";

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <div className="section-title flex gap-2 items-center text-lg text-slate-800 dark:text-white">
    {children}
  </div>
);
