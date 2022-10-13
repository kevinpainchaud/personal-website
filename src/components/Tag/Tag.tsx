import React, { ReactNode } from "react";

export const Tag = ({
  children,
  important,
}: {
  children: ReactNode;
  important?: boolean;
}) => (
  <div
    className={`border px-3 py-1 rounded-md md:px-6 md:py-2 ${
      important ? "font-bold text-slate-800 dark:text-white" : ""
    }`}
  >
    {children}
  </div>
);
